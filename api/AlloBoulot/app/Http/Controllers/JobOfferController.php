<?php

namespace App\Http\Controllers;

use App\Services\JobOfferService;
use Illuminate\Http\Request;
use App\Exceptions\ApiException;

class JobOfferController extends Controller
{
    private JobOfferService $jobOfferService;

    public function __construct(JobOfferService $jobOfferService)
    {
        $this->jobOfferService = $jobOfferService;
    }

    /**
     * @OA\Get(
     *     path="/api/job-offers",
     *     summary="Liste de toutes les offres d'emploi",
     *     description="Récupère toutes les offres d'emploi disponibles (toutes entreprises confondues)",
     *     tags={"Job Offers"},
     *     @OA\Response(
     *         response=200,
     *         description="Liste des offres récupérée avec succès",
     *         @OA\JsonContent(
     *             @OA\Property(property="error", type="boolean", example=false),
     *             @OA\Property(
     *                 property="data",
     *                 type="array",
     *                 @OA\Items(
     *                     @OA\Property(property="id", type="integer", example=1),
     *                     @OA\Property(property="title", type="string", example="Développeur PHP Senior"),
     *                     @OA\Property(property="description", type="string", example="Nous recherchons un développeur PHP expérimenté..."),
     *                     @OA\Property(property="contract_type", type="string", example="CDI"),
     *                     @OA\Property(property="study_level", type="string", example="Bac+5"),
     *                     @OA\Property(property="end_at", type="string", format="date", example="2025-12-31"),
     *                     @OA\Property(property="company_id", type="integer", example=1),
     *                     @OA\Property(property="category_id", type="integer", example=3),
     *                     @OA\Property(property="employee_id", type="integer", example=5),
     *                     @OA\Property(property="created_at", type="string", format="date-time"),
     *                     @OA\Property(property="updated_at", type="string", format="date-time")
     *                 )
     *             )
     *         )
     *     )
     * )
     */
    public function allOffers()
    {
        return response()->json($this->jobOfferService->getAllOffers());
    }

    /**
     * @OA\Get(
     *     path="/api/companies/{companyId}/job-offers",
     *     summary="Liste des offres d'une entreprise",
     *     description="Récupère toutes les offres d'emploi d'une entreprise spécifique",
     *     tags={"Job Offers"},
     *     @OA\Parameter(
     *         name="companyId",
     *         in="path",
     *         description="ID de l'entreprise",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Liste des offres de l'entreprise récupérée avec succès",
     *         @OA\JsonContent(
     *             @OA\Property(property="error", type="boolean", example=false),
     *             @OA\Property(
     *                 property="data",
     *                 type="array",
     *                 @OA\Items(
     *                     @OA\Property(property="id", type="integer", example=1),
     *                     @OA\Property(property="title", type="string", example="Développeur PHP Senior"),
     *                     @OA\Property(property="description", type="string", example="Nous recherchons..."),
     *                     @OA\Property(property="contract_type", type="string", example="CDI"),
     *                     @OA\Property(property="study_level", type="string", example="Bac+5"),
     *                     @OA\Property(property="end_at", type="string", format="date", example="2025-12-31"),
     *                     @OA\Property(property="category_id", type="integer", example=3),
     *                     @OA\Property(property="created_at", type="string", format="date-time")
     *                 )
     *             )
     *         )
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Entreprise introuvable"
     *     )
     * )
     */
    public function index($companyId)
    {
        return response()->json($this->jobOfferService->getAllByCompany($companyId));
    }

    /**
     * @OA\Get(
     *     path="/api/companies/{companyId}/job-offers/{id}",
     *     summary="Afficher une offre d'emploi",
     *     description="Récupère les détails d'une offre d'emploi spécifique",
     *     tags={"Job Offers"},
     *     @OA\Parameter(
     *         name="companyId",
     *         in="path",
     *         description="ID de l'entreprise",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="ID de l'offre d'emploi",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Offre d'emploi récupérée avec succès",
     *         @OA\JsonContent(
     *             @OA\Property(property="error", type="boolean", example=false),
     *             @OA\Property(
     *                 property="data",
     *                 type="object",
     *                 @OA\Property(property="id", type="integer", example=1),
     *                 @OA\Property(property="title", type="string", example="Développeur PHP Senior"),
     *                 @OA\Property(property="description", type="string", example="Nous recherchons un développeur PHP expérimenté..."),
     *                 @OA\Property(property="contract_type", type="string", example="CDI"),
     *                 @OA\Property(property="study_level", type="string", example="Bac+5"),
     *                 @OA\Property(property="end_at", type="string", format="date", example="2025-12-31"),
     *                 @OA\Property(property="company_id", type="integer", example=1),
     *                 @OA\Property(property="category_id", type="integer", example=3),
     *                 @OA\Property(property="employee_id", type="integer", example=5),
     *                 @OA\Property(property="created_at", type="string", format="date-time"),
     *                 @OA\Property(property="updated_at", type="string", format="date-time")
     *             )
     *         )
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Offre d'emploi introuvable"
     *     )
     * )
     */
    public function show($companyId, $id)
    {
        return response()->json($this->jobOfferService->findById($companyId, $id));
    }

    /**
     * @OA\Post(
     *     path="/api/companies/{companyId}/job-offers",
     *     summary="Créer une offre d'emploi",
     *     description="Crée une nouvelle offre d'emploi pour une entreprise (RH/Admin uniquement)",
     *     tags={"Job Offers"},
     *     security={{"bearerAuth":{}}},
     *     @OA\Parameter(
     *         name="companyId",
     *         in="path",
     *         description="ID de l'entreprise",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             required={"title", "description"},
     *             @OA\Property(property="title", type="string", maxLength=255, example="Développeur PHP Senior"),
     *             @OA\Property(property="description", type="string", example="Nous recherchons un développeur PHP expérimenté avec minimum 5 ans d'expérience..."),
     *             @OA\Property(property="contract_type", type="string", maxLength=100, example="CDI"),
     *             @OA\Property(property="study_level", type="string", maxLength=100, example="Bac+5"),
     *             @OA\Property(property="end_at", type="string", format="date", example="2025-12-31", description="Date de fin de l'offre"),
     *             @OA\Property(property="category_id", type="integer", example=3, description="ID de la catégorie")
     *         )
     *     ),
     *     @OA\Response(
     *         response=201,
     *         description="Offre d'emploi créée avec succès",
     *         @OA\JsonContent(
     *             @OA\Property(property="error", type="boolean", example=false),
     *             @OA\Property(property="message", type="string", example="Offre d'emploi créée avec succès"),
     *             @OA\Property(
     *                 property="data",
     *                 type="object",
     *                 @OA\Property(property="id", type="integer", example=1),
     *                 @OA\Property(property="title", type="string", example="Développeur PHP Senior"),
     *                 @OA\Property(property="description", type="string", example="Nous recherchons..."),
     *                 @OA\Property(property="contract_type", type="string", example="CDI"),
     *                 @OA\Property(property="company_id", type="integer", example=1),
     *                 @OA\Property(property="created_at", type="string", format="date-time")
     *             )
     *         )
     *     ),
     *     @OA\Response(
     *         response=403,
     *         description="Accès refusé"
     *     ),
     *     @OA\Response(
     *         response=422,
     *         description="Erreur de validation"
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Entreprise introuvable"
     *     )
     * )
     */
    public function store(Request $request, $companyId)
    {
        $data = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'contract_type' => 'nullable|string|max:100',
            'study_level' => 'nullable|string|max:100',
            'end_at' => 'nullable|date',
            'category_id' => 'nullable|integer|exists:categories,id',
        ]);

        return $this->jobOfferService->create($companyId, $data);
    }

    /**
     * @OA\Put(
     *     path="/api/companies/{companyId}/job-offers/{id}",
     *     summary="Mettre à jour une offre d'emploi",
     *     description="Met à jour une offre d'emploi existante (RH/Admin uniquement)",
     *     tags={"Job Offers"},
     *     security={{"bearerAuth":{}}},
     *     @OA\Parameter(
     *         name="companyId",
     *         in="path",
     *         description="ID de l'entreprise",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="ID de l'offre d'emploi",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\RequestBody(
     *         required=false,
     *         @OA\JsonContent(
     *             @OA\Property(property="title", type="string", maxLength=255, example="Développeur PHP Lead"),
     *             @OA\Property(property="description", type="string", example="Nouvelle description..."),
     *             @OA\Property(property="contract_type", type="string", maxLength=100, example="CDI"),
     *             @OA\Property(property="study_level", type="string", maxLength=100, example="Bac+5"),
     *             @OA\Property(property="end_at", type="string", format="date", example="2026-01-31"),
     *             @OA\Property(property="category_id", type="integer", example=4)
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Offre d'emploi mise à jour avec succès",
     *         @OA\JsonContent(
     *             @OA\Property(property="error", type="boolean", example=false),
     *             @OA\Property(property="message", type="string", example="Offre d'emploi mise à jour avec succès"),
     *             @OA\Property(
     *                 property="data",
     *                 type="object",
     *                 @OA\Property(property="id", type="integer", example=1),
     *                 @OA\Property(property="title", type="string", example="Développeur PHP Lead"),
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
     *         description="Offre d'emploi ou entreprise introuvable"
     *     ),
     *     @OA\Response(
     *         response=422,
     *         description="Erreur de validation"
     *     )
     * )
     */
    public function update(Request $request, $companyId, $id)
    {
        $data = $request->validate([
            'title' => 'nullable|string|max:255',
            'description' => 'nullable|string',
            'contract_type' => 'nullable|string|max:100',
            'study_level' => 'nullable|string|max:100',
            'end_at' => 'nullable|date',
            'category_id' => 'nullable|integer|exists:categories,id',
        ]);

        return response()->json($this->jobOfferService->update($companyId, $id, $data));
    }

    /**
     * @OA\Delete(
     *     path="/api/companies/{companyId}/job-offers/{id}",
     *     summary="Supprimer une offre d'emploi",
     *     description="Supprime une offre d'emploi (RH/Admin uniquement)",
     *     tags={"Job Offers"},
     *     security={{"bearerAuth":{}}},
     *     @OA\Parameter(
     *         name="companyId",
     *         in="path",
     *         description="ID de l'entreprise",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="ID de l'offre d'emploi",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Offre d'emploi supprimée avec succès",
     *         @OA\JsonContent(
     *             @OA\Property(property="error", type="boolean", example=false),
     *             @OA\Property(property="message", type="string", example="Offre d'emploi supprimée avec succès")
     *         )
     *     ),
     *     @OA\Response(
     *         response=403,
     *         description="Accès refusé"
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Offre d'emploi ou entreprise introuvable"
     *     )
     * )
     */
    public function destroy($companyId, $id)
    {
        return response()->json($this->jobOfferService->delete($companyId, $id));
    }

    /**
     * @OA\Get(
     *     path="/api/job-offers/search",
     *     summary="Rechercher des offres d'emploi",
     *     description="Recherche des offres d'emploi par mots-clés et/ou catégorie",
     *     tags={"Job Offers"},
     *     @OA\Parameter(
     *         name="search",
     *         in="query",
     *         description="Mot-clé de recherche (titre, description)",
     *         required=false,
     *         @OA\Schema(type="string", maxLength=255, example="développeur php")
     *     ),
     *     @OA\Parameter(
     *         name="category",
     *         in="query",
     *         description="ID de la catégorie",
     *         required=false,
     *         @OA\Schema(type="integer", example=3)
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Résultats de recherche",
     *         @OA\JsonContent(
     *             @OA\Property(property="error", type="boolean", example=false),
     *             @OA\Property(
     *                 property="data",
     *                 type="array",
     *                 @OA\Items(
     *                     @OA\Property(property="id", type="integer", example=1),
     *                     @OA\Property(property="title", type="string", example="Développeur PHP Senior"),
     *                     @OA\Property(property="description", type="string", example="Nous recherchons..."),
     *                     @OA\Property(property="contract_type", type="string", example="CDI"),
     *                     @OA\Property(property="company_id", type="integer", example=1),
     *                     @OA\Property(property="category_id", type="integer", example=3)
     *                 )
     *             )
     *         )
     *     ),
     *     @OA\Response(
     *         response=422,
     *         description="Erreur de validation"
     *     )
     * )
     */
    public function search(Request $request)
    {
        $filters = $request->validate([
            'search' => 'nullable|string|max:255',
            'category' => 'nullable|integer|exists:categories,id',
        ]);

        return response()->json($this->jobOfferService->searchOffers($filters));
    }
}