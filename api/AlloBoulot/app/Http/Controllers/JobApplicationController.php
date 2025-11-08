<?php

namespace App\Http\Controllers;

use App\Services\JobApplicationService;
use Illuminate\Http\Request;

class JobApplicationController extends Controller
{
    private JobApplicationService $jobApplicationService;

    public function __construct(JobApplicationService $jobApplicationService)
    {
        $this->jobApplicationService = $jobApplicationService;
    }

    /**
     * @OA\Post(
     *     path="/api/job-applications",
     *     summary="Postuler à une offre d'emploi",
     *     description="Permet à un utilisateur de postuler à une offre d'emploi avec son CV et lettre de motivation",
     *     tags={"Job Applications"},
     *     security={{"bearerAuth":{}}},
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\MediaType(
     *             mediaType="multipart/form-data",
     *             @OA\Schema(
     *                 required={"job_offer_id", "resume_ref"},
     *                 @OA\Property(property="job_offer_id", type="integer", example=1, description="ID de l'offre d'emploi"),
     *                 @OA\Property(property="message", type="string", example="Je suis très intéressé par ce poste..."),
     *                 @OA\Property(property="resume_ref", type="string", format="binary", description="CV (PDF, DOCX, max 10MB)"),
     *                 @OA\Property(property="motivation_ref", type="string", format="binary", description="Lettre de motivation (PDF, DOCX, max 10MB)")
     *             )
     *         )
     *     ),
     *     @OA\Response(
     *         response=201,
     *         description="Candidature envoyée avec succès",
     *         @OA\JsonContent(
     *             @OA\Property(property="error", type="boolean", example=false),
     *             @OA\Property(property="message", type="string", example="Candidature envoyée avec succès"),
     *             @OA\Property(
     *                 property="data",
     *                 type="object",
     *                 @OA\Property(property="id", type="integer", example=1),
     *                 @OA\Property(property="job_offer_id", type="integer", example=1),
     *                 @OA\Property(property="user_id", type="integer", example=5),
     *                 @OA\Property(property="message", type="string", example="Je suis très intéressé..."),
     *                 @OA\Property(property="resume_ref", type="string", example="/storage/resumes/cv_123.pdf"),
     *                 @OA\Property(property="motivation_ref", type="string", example="/storage/motivations/lettre_123.pdf"),
     *                 @OA\Property(property="status", type="string", example="pending"),
     *                 @OA\Property(property="created_at", type="string", format="date-time"),
     *                 @OA\Property(property="updated_at", type="string", format="date-time")
     *             )
     *         )
     *     ),
     *     @OA\Response(
     *         response=422,
     *         description="Erreur de validation"
     *     ),
     *     @OA\Response(
     *         response=401,
     *         description="Non authentifié"
     *     )
     * )
     */
    public function apply(Request $request)
    {
        $data = $request->validate([
            'job_offer_id' => 'required|integer|exists:job_offers,id',
            'message' => 'nullable|string',
            'resume_ref' => 'required|file|max:10240',
            'motivation_ref' => 'nullable|file|max:10240',
        ]);

        $data["resume_ref"] = $request->file("resume_ref");
        $data["motivation_ref"] = $request->file("motivation_ref");

        return response()->json($this->jobApplicationService->apply($data), 201);
    }

    /**
     * @OA\Get(
     *     path="/api/job-applications/offer/{offerId}",
     *     summary="Liste des candidatures pour une offre",
     *     description="Récupère toutes les candidatures pour une offre d'emploi spécifique (RH/Admin uniquement)",
     *     tags={"Job Applications"},
     *     security={{"bearerAuth":{}}},
     *     @OA\Parameter(
     *         name="offerId",
     *         in="path",
     *         description="ID de l'offre d'emploi",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Liste des candidatures récupérée avec succès",
     *         @OA\JsonContent(
     *             @OA\Property(property="error", type="boolean", example=false),
     *             @OA\Property(
     *                 property="data",
     *                 type="array",
     *                 @OA\Items(
     *                     @OA\Property(property="id", type="integer", example=1),
     *                     @OA\Property(property="job_offer_id", type="integer", example=1),
     *                     @OA\Property(property="user_id", type="integer", example=5),
     *                     @OA\Property(property="message", type="string", example="Je suis très intéressé..."),
     *                     @OA\Property(property="resume_ref", type="string", example="/storage/resumes/cv_123.pdf"),
     *                     @OA\Property(property="motivation_ref", type="string", example="/storage/motivations/lettre_123.pdf"),
     *                     @OA\Property(property="status", type="string", example="pending"),
     *                     @OA\Property(property="created_at", type="string", format="date-time"),
     *                     @OA\Property(property="updated_at", type="string", format="date-time"),
     *                     @OA\Property(
     *                         property="user",
     *                         type="object",
     *                         @OA\Property(property="id", type="integer", example=5),
     *                         @OA\Property(property="first_name", type="string", example="Jean"),
     *                         @OA\Property(property="last_name", type="string", example="Dupont"),
     *                         @OA\Property(property="email", type="string", example="jean@example.com")
     *                     )
     *                 )
     *             )
     *         )
     *     ),
     *     @OA\Response(
     *         response=403,
     *         description="Accès refusé"
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Offre d'emploi introuvable"
     *     ),
     *     @OA\Response(
     *         response=401,
     *         description="Non authentifié"
     *     )
     * )
     */
    public function index($offerId)
    {
        return response()->json($this->jobApplicationService->getApplicationsForOffer($offerId));
    }

    /**
     * @OA\Put(
     *     path="/api/job-applications/{applicationId}/status",
     *     summary="Mettre à jour le statut d'une candidature",
     *     description="Modifie le statut d'une candidature (RH/Admin uniquement)",
     *     tags={"Job Applications"},
     *     security={{"bearerAuth":{}}},
     *     @OA\Parameter(
     *         name="applicationId",
     *         in="path",
     *         description="ID de la candidature",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             required={"status"},
     *             @OA\Property(
     *                 property="status",
     *                 type="string",
     *                 enum={"pending", "interview", "test", "accepted"},
     *                 example="interview",
     *                 description="Nouveau statut de la candidature"
     *             )
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Statut mis à jour avec succès",
     *         @OA\JsonContent(
     *             @OA\Property(property="error", type="boolean", example=false),
     *             @OA\Property(property="message", type="string", example="Statut mis à jour avec succès"),
     *             @OA\Property(
     *                 property="data",
     *                 type="object",
     *                 @OA\Property(property="id", type="integer", example=1),
     *                 @OA\Property(property="status", type="string", example="interview"),
     *                 @OA\Property(property="updated_at", type="string", format="date-time")
     *             )
     *         )
     *     ),
     *     @OA\Response(
     *         response=403,
     *         description="Accès refusé"
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Candidature introuvable"
     *     ),
     *     @OA\Response(
     *         response=422,
     *         description="Erreur de validation"
     *     ),
     *     @OA\Response(
     *         response=401,
     *         description="Non authentifié"
     *     )
     * )
     */
    public function updateStatus(Request $request, $applicationId)
    {
        $data = $request->validate([
            'status' => 'required|string|in:pending,interview,test,accepted,rejected'
        ]);

        return response()->json($this->jobApplicationService->updateStatus($applicationId, $data['status']));
    }

    /**
     * @OA\Get(
     *     path="/api/job-applications/my",
     *     summary="Mes candidatures",
     *     description="Récupère toutes les candidatures de l'utilisateur connecté",
     *     tags={"Job Applications"},
     *     security={{"bearerAuth":{}}},
     *     @OA\Response(
     *         response=200,
     *         description="Liste de mes candidatures récupérée avec succès",
     *         @OA\JsonContent(
     *             @OA\Property(property="error", type="boolean", example=false),
     *             @OA\Property(
     *                 property="data",
     *                 type="array",
     *                 @OA\Items(
     *                     @OA\Property(property="id", type="integer", example=1),
     *                     @OA\Property(property="job_offer_id", type="integer", example=1),
     *                     @OA\Property(property="message", type="string", example="Je suis très intéressé..."),
     *                     @OA\Property(property="resume_ref", type="string", example="/storage/resumes/cv_123.pdf"),
     *                     @OA\Property(property="motivation_ref", type="string", example="/storage/motivations/lettre_123.pdf"),
     *                     @OA\Property(property="status", type="string", example="pending"),
     *                     @OA\Property(property="created_at", type="string", format="date-time"),
     *                     @OA\Property(property="updated_at", type="string", format="date-time"),
     *                     @OA\Property(
     *                         property="job_offer",
     *                         type="object",
     *                         @OA\Property(property="id", type="integer", example=1),
     *                         @OA\Property(property="title", type="string", example="Développeur PHP"),
     *                         @OA\Property(property="company_name", type="string", example="Ma Société")
     *                     )
     *                 )
     *             )
     *         )
     *     ),
     *     @OA\Response(
     *         response=401,
     *         description="Non authentifié"
     *     )
     * )
     */

    public function myApplications()
    {
        return response()->json($this->jobApplicationService->getMyApplications());
    }

    /**
     * @OA\Get(
     *     path="/api/job-applications/my",
     *     summary="Candidatures d'une entreprise",
     *     description="Récupère toutes les candidatures reçu",
     *     tags={"Job Applications"},
     *     security={{"bearerAuth":{}}},
     *     @OA\Response(
     *         response=200,
     *         description="Liste des candidatures récupérée avec succès",
     *         @OA\JsonContent(
     *             @OA\Property(property="error", type="boolean", example=false),
     *             @OA\Property(
     *                 property="data",
     *                 type="array",
     *                 @OA\Items(
     *                     @OA\Property(property="id", type="integer", example=1),
     *                     @OA\Property(property="job_offer_id", type="integer", example=1),
     *                     @OA\Property(property="message", type="string", example="Je suis très intéressé..."),
     *                     @OA\Property(property="resume_ref", type="string", example="/storage/resumes/cv_123.pdf"),
     *                     @OA\Property(property="motivation_ref", type="string", example="/storage/motivations/lettre_123.pdf"),
     *                     @OA\Property(property="status", type="string", example="pending"),
     *                     @OA\Property(property="created_at", type="string", format="date-time"),
     *                     @OA\Property(property="updated_at", type="string", format="date-time"),
     *                     @OA\Property(
     *                         property="job_offer",
     *                         type="object",
     *                         @OA\Property(property="id", type="integer", example=1),
     *                         @OA\Property(property="title", type="string", example="Développeur PHP"),
     *                         @OA\Property(property="company_name", type="string", example="Ma Société")
     *                     )
     *                 )
     *             )
     *         )
     *     ),
     *     @OA\Response(
     *         response=401,
     *         description="Non authentifié"
     *     )
     * )
     */
    public function allApplicationsForCompany($companyId)
    {
        return response()->json($this->jobApplicationService->getCompanyApplications($companyId));
    }
}
