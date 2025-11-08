<?php

namespace App\Services;

use App\Models\Company;
use App\Models\User;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use App\Exceptions\ApiException;
use App\Services\UploadFileToCloudflareService;

class CompanyService
{
    private UploadFileToCloudflareService $uploadFileToCloudflareService;

    public function __construct(UploadFileToCloudflareService $uploadFileToCloudflareService)
    {
        $this->uploadFileToCloudflareService = $uploadFileToCloudflareService;
    }

    public function getAllCompanies()
    {
        try {
            return Company::all();
        } catch (\Exception $e) {
            throw new ApiException("Erreur lors de la récupération des compagnies : " . $e->getMessage(), 500);
        }
    }


    public function getCompany($id)
    {
        try {
            $company = Company::with(['creator', 'employees'])->findOrFail($id);

            return [
                'id' => $company->id,
                'name' => $company->name,
                'logo' => $company->logo,
                'address' => $company->address,
                'description' => $company->description,
                'creators' => $company->creator,
                'employees' => $company->employees,
            ];
        } catch (ModelNotFoundException $e) {
            throw new ApiException("Compagnie introuvable", 404);
        } catch (\Exception $e) {
            throw new ApiException("Erreur lors de la récupération de la compagnie : " . $e->getMessage(), 500);
        }
    }


    public function createCompany(array $data)
    {
        try {
            $data["logo"] = $this->uploadFileToCloudflareService->upload($data["logo"]);

            $company = Company::create($data);
            $company->users()->attach(auth()->id(), ['role' => 'creator']);
            return $company->load('users');
        } catch (\Exception $e) {
            throw new ApiException("Erreur lors de la création de la compagnie : " . $e->getMessage(), 500);
        }
    }

    public function updateCompany($id, array $data)
    {
        try {

            $company = Company::findOrFail($id);
            $authUser = auth()->user();
            // dd($data);

            if (!$company->isCreator($authUser) && !$company->isRh($authUser)) {
                throw new ApiException("Vous n'avez pas les droits pour réaliser cette action", 403);
            }

            if (isset($data["logo"]) && $data["logo"] instanceof \Illuminate\Http\UploadedFile) {
                $data["logo"] = $this->uploadFileToCloudflareService->upload($data["logo"]);
            } else {
                unset($data["logo"]);
            }

            $company->update($data);
            return ['message' => 'Compagnie modifiée avec succès'];
        } catch (ModelNotFoundException $e) {
            throw new ApiException("Compagnie introuvable", 404);
        } catch (ApiException $e) {
            throw $e;
        } catch (\Exception $e) {
            throw new ApiException("Erreur lors de la mise à jour de la compagnie : " . $e->getMessage(), 500);
        }
    }


    public function deleteCompany($id)
    {
        try {
            $company = Company::findOrFail($id);
            $authUser = auth()->user();

            if (!$company->isCreator($authUser) && !$authUser->isAdmin()) {
                throw new ApiException("Vous n'avez pas les droits pour réaliser cette action", 403);
            }

            $company->delete();
            return ['message' => 'Compagnie supprimée avec succès'];
        } catch (ModelNotFoundException $e) {
            throw new ApiException("Compagnie introuvable", 404);
        } catch (ApiException $e) {
            throw $e;
        } catch (\Exception $e) {
            throw new ApiException("Erreur lors de la suppression de la compagnie : " . $e->getMessage(), 500);
        }
    }


    public function addEmployee($id, $data)
    {
        try {
            $company = Company::findOrFail($id);
            $authUser = auth()->user();

            if (!$company->isCreator($authUser) && !$company->isRh($authUser)) {
                throw new ApiException("Vous n'avez pas les droits pour réaliser cette action", 403);
            }

            $user = User::findOrFail($data["user_id"]);
            $company->users()->syncWithoutDetaching([$user->id => ['role' => $data["role"]]]);
            return ["message" => "Utilisateur ajouté avec succès"];
        } catch (ModelNotFoundException $e) {
            throw new ApiException("Utilisateur ou compagnie introuvable", 404);
        } catch (ApiException $e) {
            throw $e;
        } catch (\Exception $e) {
            throw new ApiException("Erreur lors de l’ajout de l’employé : " . $e->getMessage(), 500);
        }
    }


    public function removeEmployee($id, $data)
    {
        try {

            $company = Company::findOrFail($id);
            $authUser = auth()->user();
            $user = User::findOrFail($data["user_id"]);

            if ($company->isEmployee($authUser)) {
                throw new ApiException("Vous n'avez pas les droits pour réaliser cette action", 403);
            }

            $company->users()->detach($user->id);
            return ["message" => "Utilisateur retiré avec succès"];
        } catch (ModelNotFoundException $e) {
            throw new ApiException("Utilisateur ou compagnie introuvable", 404);
        } catch (ApiException $e) {
            throw $e;
        } catch (\Exception $e) {
            throw new ApiException("Erreur lors du retrait de l’employé : " . $e->getMessage(), 500);
        }
    }


    public function changeEmployeeRole($id, $data)
    {
        try {
            $company = Company::findOrFail($id);
            $authUser = auth()->user();

            if (!$company->isCreator($authUser)) {
                throw new ApiException("Vous n'avez pas les droits pour réaliser cette action", 403);
            }

            $company->users()->updateExistingPivot($data["user_id"], ['role' => $data["role"]]);
            return ["message" => "Rôle changé avec succès"];
        } catch (ModelNotFoundException $e) {
            throw new ApiException("Utilisateur ou compagnie introuvable", 404);
        } catch (ApiException $e) {
            throw $e;
        } catch (\Exception $e) {
            throw new ApiException("Erreur lors du changement de rôle : " . $e->getMessage(), 500);
        }
    }

    public function myCompanies()
    {
        try {
            $user = auth()->user();
            $companies = Company::getCreatedBy($user);
            return $companies;
        } catch (\Exception $e) {
            throw new ApiException("Erreur lors du chargement des companies : " . $e->getMessage(), 500);
        }
    }
}
