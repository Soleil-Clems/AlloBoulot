<?php

namespace App\Services;

use App\Models\JobOffer;
use App\Models\Company;
use App\Models\Employee;
use Illuminate\Support\Facades\Auth;
use App\Exceptions\ApiException;

class JobOfferService
{
    public function getAllOffers()
    {
        return JobOffer::with(['company', 'category', 'employee.user'])->latest()->get();
    }

    public function getAllByCompany($companyId)
    {
        return JobOffer::with(['company', 'category', "employee.user"])
            ->where('company_id', $companyId)
            ->latest()
            ->get();
    }

    public function findById($companyId, $id)
    {
        $offer = JobOffer::with(['company', 'applications', 'category'])
            ->where('company_id', $companyId)
            ->find($id);

        if (!$offer) {
            throw new ApiException("Offre d’emploi non trouvée pour cette compagnie.", 404);
        }

        return $offer;
    }

    public function create($companyId, $data)
    {
        try {
            $authUser = auth()->user();

            $employee = Employee::where('user_id', $authUser->id)
                ->where('company_id', $companyId)
                ->firstOrFail();

            $data['company_id'] = $companyId;
            $data['employee_id'] = $employee->id;

            $company = Company::findOrFail($companyId);

            if ($company->isEmployee($authUser)) {
                throw new \App\Exceptions\ApiException(
                    "Vous n'avez pas les droits nécessaires pour cette action",
                    403
                );
            }

            $offer = JobOffer::create($data);

            return response()->json([
                'message' => "Votre offre d'emploi a été créée avec succès",
                'offer'   => $offer,
            ], 201);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            throw new ApiException("Vous n'avez pas les droits nécessaires pour cette action", 403);
        } catch (\App\Exceptions\ApiException $e) {

            return response()->json([
                'message' => $e->getMessage(),
            ], 400);
        } catch (\Throwable $th) {
            return response()->json([
                'message' => "Une erreur inattendue est survenue.",
                'error' => $th->getMessage(),
            ], 500);
        }
    }


    public function update($companyId, $id, $data)
    {
        $company = Company::findOrFail($companyId);

        $authUser = auth()->user();
        if ($company->isEmployee($authUser)) {
            throw new \App\Exceptions\ApiException("Vous n'avez pas les droits nécessaires pour cette action", 403);
        }

        $offer = JobOffer::where('company_id', $companyId)->find($id);
        if (!$offer) {
            throw new ApiException("Offre introuvable pour cette compagnie.", 404);
        }

        $offer->update($data);
        return ["message" => "Votre offre d'emploi a été mise à jour", "offer" => $offer];
    }

    public function delete($companyId, $id)
    {
        $offer = JobOffer::where('company_id', $companyId)->find($id);
        if (!$offer) {
            throw new ApiException("Offre introuvable pour cette compagnie.", 404);
        }

        $offer->delete();
        return ['message' => 'Offre supprimée avec succès.'];
    }

    public function searchOffers(array $filters)
    {
        $query = JobOffer::with(['company', 'category']);

        if (!empty($filters['search'])) {
            $search = $filters['search'];
            $query->where(function ($q) use ($search) {
                $q->where('title', 'LIKE', "%$search%")
                    ->orWhereHas('company', fn($q2) => $q2->where('name', 'LIKE', "%$search%"));
            });
        }

        if (!empty($filters['category'])) {
            $query->where('category_id', $filters['category']);
        }

        return $query->latest()->get();
    }
}
