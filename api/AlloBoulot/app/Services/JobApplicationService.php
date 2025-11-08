<?php

namespace App\Services;

use App\Models\JobApplication;
use App\Models\Company;
use App\Services\CompanyService;
use App\Models\User;
use App\Services\UploadFileToCloudflareService;
use App\Models\JobOffer;
use Illuminate\Support\Facades\Auth;
use App\Exceptions\ApiException;

class JobApplicationService
{
    private UploadFileToCloudflareService $uploadFileToCloudflareService;
    private CompanyService $companyService;
    public function __construct(UploadFileToCloudflareService $uploadFileToCloudflareService, CompanyService $companyService)
    {
        $this->uploadFileToCloudflareService = $uploadFileToCloudflareService;
        $this->companyService = $companyService;
    }
    public function apply(array $data)
    {
        $user = Auth::user();

        $data["resume_ref"] = $this->uploadFileToCloudflareService->upload($data["resume_ref"]);
        $data["motivation_ref"] = $this->uploadFileToCloudflareService->upload($data["motivation_ref"]);



        $offer = JobOffer::find($data['job_offer_id']);
        if (!$offer) {
            throw new ApiException("Offre non trouvée.", 404);
        }

        $alreadyApplied = JobApplication::where('job_offer_id', $offer->id)
            ->where('user_id', $user->id)
            ->exists();

        if ($alreadyApplied) {
            throw new ApiException("Vous avez déjà postulé à cette offre.", 400);
        }

        $application = JobApplication::create([
            'job_offer_id' => $offer->id,
            'user_id' => $user->id,
            'message' => $data['message'] ?? null,
            'resume_ref' => $data['resume_ref'] ?? null,
            'motivation_ref' => $data['motivation_ref'] ?? null,
            'status' => 'pending',
        ]);

        return ["message" => "Votre candidature a été envoyée avec succès", "application" => $application];
    }

    public function getApplicationsForOffer($offerId)
    {
        return JobApplication::with('user')
            ->where('job_offer_id', $offerId)
            ->get();
    }

    public function updateStatus($applicationId, $status)
    {
        $validStatuses = ['pending', 'interview', 'test', 'accepted', 'rejected'];

        if (!in_array($status, $validStatuses)) {
            throw new ApiException("Statut invalide. Valeurs possibles : " . implode(', ', $validStatuses), 400);
        }



        $application = JobApplication::find($applicationId);
        if (!$application) {
            throw new ApiException("Candidature non trouvée.", 404);
        }

        $userId = $application->user_id;

        $jobOffer = JobOffer::find($application->job_offer_id);

        // dd($jobOffer->company_id);

        $application->update(['status' => $status]);

        if ($status==="accepted") {
            $this->companyService->addEmployee($jobOffer->company_id,["user_id"=>$userId, "role"=>"employee"]);
            $application->delete();
        }
        
        if ($status==="rejected") {
            $application->delete();
        }


        return ["message" => "Le statut de la candidature a été modifié avec succès", "application" => $application];
    }

    public function getMyApplications()
    {
        return JobApplication::with('offer.company', 'offer.category')
            ->where('user_id', Auth::id())
            ->get();
    }

    public function getCompanyApplications($companyId)
    {

        try {

            $company = Company::findOrFail($companyId);

            $authUser = auth()->user();

            if (!$company->belongsToCompany($authUser)) {
                throw new ApiException("Vous n'avez pas les droits pour réaliser cette action", 403);
            }

            if ($company->isEmployee($authUser)) {
                throw new ApiException("Vous n'avez pas les droits pour réaliser cette action", 403);
            }

            return JobApplication::with(['user', 'offer'])
                ->whereHas('offer', function ($query) use ($companyId) {
                    $query->where('company_id', $companyId);
                })
                ->get();
        }  catch (ApiException $e) {
            throw $e;
        } catch (\Exception $e) {
            throw new ApiException("Erreur lors du retrait de l’employé : " . $e->getMessage(), 500);
        }
    }
}
