<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Services\CompanyService;

class CompanyController extends Controller
{
    private CompanyService $companyService;

    public function __construct(CompanyService $companyService)
    {
        $this->companyService = $companyService;
    }

    /**
     * @OA\Get(
     *     path="/api/companies",
     *     summary="Liste des entreprises",
     *     description="Récupère la liste de toutes les entreprises (Admin uniquement)",
     *     tags={"Companies"},
     *     security={{"bearerAuth":{}}},
     *     @OA\Response(
     *         response=200,
     *         description="Liste des entreprises récupérée avec succès",
     *         @OA\JsonContent(
     *             @OA\Property(property="error", type="boolean", example=false),
     *             @OA\Property(
     *                 property="data",
     *                 type="array",
     *                 @OA\Items(
     *                     @OA\Property(property="id", type="integer", example=1),
     *                     @OA\Property(property="name", type="string", example="Ma Société"),
     *                     @OA\Property(property="logo", type="string", example="https://example.com/logo.png"),
     *                     @OA\Property(property="address", type="string", example="123 rue de Paris"),
     *                     @OA\Property(property="description", type="string", example="Description de l'entreprise"),
     *                     @OA\Property(property="created_at", type="string", format="date-time"),
     *                     @OA\Property(property="updated_at", type="string", format="date-time")
     *                 )
     *             )
     *         )
     *     ),
     *     @OA\Response(
     *         response=403,
     *         description="Accès refusé",
     *         @OA\JsonContent(
     *             @OA\Property(property="error", type="boolean", example=true),
     *             @OA\Property(property="message", type="string", example="Vous n'avez pas les droits nécessaires pour cette action")
     *         )
     *     ),
     *     @OA\Response(
     *         response=401,
     *         description="Non authentifié"
     *     )
     * )
     */
    public function index()
    {

        $result = $this->companyService->getAllCompanies();
        return response()->json($result);
    }


    /**
     * @OA\Get(
     *     path="/api/companies/{id}",
     *     summary="Afficher une entreprise",
     *     description="Récupère les détails d'une entreprise spécifique",
     *     tags={"Companies"},
     *     security={{"bearerAuth":{}}},
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="ID de l'entreprise",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Entreprise récupérée avec succès",
     *         @OA\JsonContent(
     *             @OA\Property(property="error", type="boolean", example=false),
     *             @OA\Property(
     *                 property="data",
     *                 type="object",
     *                 @OA\Property(property="id", type="integer", example=1),
     *                 @OA\Property(property="name", type="string", example="Ma Société"),
     *                 @OA\Property(property="logo", type="string", example="https://example.com/logo.png"),
     *                 @OA\Property(property="address", type="string", example="123 rue de Paris"),
     *                 @OA\Property(property="description", type="string", example="Description de l'entreprise"),
     *                 @OA\Property(property="created_at", type="string", format="date-time"),
     *                 @OA\Property(property="updated_at", type="string", format="date-time")
     *             )
     *         )
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Entreprise introuvable"
     *     ),
     *     @OA\Response(
     *         response=401,
     *         description="Non authentifié"
     *     )
     * )
     */
    public function show($id)
    {
        $result = $this->companyService->getCompany($id);
        return response()->json($result);
    }

    /**
     * @OA\Post(
     *     path="/api/companies",
     *     summary="Créer une entreprise",
     *     description="Crée une nouvelle entreprise",
     *     tags={"Companies"},
     *     security={{"bearerAuth":{}}},
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             required={"name"},
     *             @OA\Property(property="name", type="string", maxLength=50, example="Ma Société"),
     *             @OA\Property(property="logo", type="string", maxLength=255, example="https://example.com/logo.png"),
     *             @OA\Property(property="address", type="string", maxLength=255, example="123 rue de Paris"),
     *             @OA\Property(property="description", type="string", example="Description de l'entreprise")
     *         )
     *     ),
     *     @OA\Response(
     *         response=201,
     *         description="Entreprise créée avec succès",
     *         @OA\JsonContent(
     *             @OA\Property(property="error", type="boolean", example=false),
     *             @OA\Property(property="message", type="string", example="Entreprise créée avec succès"),
     *             @OA\Property(
     *                 property="data",
     *                 type="object",
     *                 @OA\Property(property="id", type="integer", example=1),
     *                 @OA\Property(property="name", type="string", example="Ma Société"),
     *                 @OA\Property(property="logo", type="string", example="https://example.com/logo.png"),
     *                 @OA\Property(property="address", type="string", example="123 rue de Paris"),
     *                 @OA\Property(property="description", type="string", example="Description de l'entreprise"),
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
    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string|max:50',
            'logo' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'address' => 'nullable|string|max:255',
            'description' => 'nullable|string',
        ]);

        $data["logo"] = $request->file("logo");
        $result = $this->companyService->createCompany($data);
        return response()->json($result, 201);
    }


    /**
     * @OA\Put(
     *     path="/api/companies/{id}",
     *     summary="Mettre à jour une entreprise",
     *     description="Met à jour les informations d'une entreprise",
     *     tags={"Companies"},
     *     security={{"bearerAuth":{}}},
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="ID de l'entreprise",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\RequestBody(
     *         required=false,
     *         @OA\JsonContent(
     *             @OA\Property(property="name", type="string", maxLength=50, example="Ma Société Modifiée"),
     *             @OA\Property(property="logo", type="string", maxLength=255, example="https://example.com/new-logo.png"),
     *             @OA\Property(property="address", type="string", maxLength=255, example="456 avenue des Champs"),
     *             @OA\Property(property="description", type="string", example="Nouvelle description")
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Entreprise mise à jour avec succès",
     *         @OA\JsonContent(
     *             @OA\Property(property="error", type="boolean", example=false),
     *             @OA\Property(property="message", type="string", example="Entreprise mise à jour avec succès"),
     *             @OA\Property(
     *                 property="data",
     *                 type="object",
     *                 @OA\Property(property="id", type="integer", example=1),
     *                 @OA\Property(property="name", type="string", example="Ma Société Modifiée")
     *             )
     *         )
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Entreprise introuvable"
     *     ),
     *     @OA\Response(
     *         response=403,
     *         description="Accès refusé"
     *     ),
     *     @OA\Response(
     *         response=422,
     *         description="Erreur de validation"
     *     )
     * )
     */
    public function update(Request $request, $id)
    {
        $data = $request->validate([
            // "id"=>"required|string",
            'name' => 'nullable|string|max:50',
            'address' => 'nullable|string|max:255',
            'description' => 'nullable|string',
        ]);

        $data["logo"] = $request->file("logo");
    

        if ($request->hasFile('logo')) {
            $data["logo"] = $request->file("logo");
        } else {
            unset($data['logo']);
        }

        $result = $this->companyService->updateCompany($id, $data);
        return response()->json($result);
    }

    /**
     * @OA\Delete(
     *     path="/api/companies/{id}",
     *     summary="Supprimer une entreprise",
     *     description="Supprime une entreprise",
     *     tags={"Companies"},
     *     security={{"bearerAuth":{}}},
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="ID de l'entreprise",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Entreprise supprimée avec succès",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="Company supprimée avec succès.")
     *         )
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Entreprise introuvable"
     *     ),
     *     @OA\Response(
     *         response=403,
     *         description="Accès refusé"
     *     )
     * )
     */
    public function destroy($id)
    {
        $this->companyService->deleteCompany($id);
        return response()->json(['message' => 'Company supprimée avec succès.']);
    }

    /**
     * @OA\Post(
     *     path="/api/companies/{id}/add-employee",
     *     summary="Ajouter un employé",
     *     description="Ajoute un employé à une entreprise",
     *     tags={"Companies - Employees"},
     *     security={{"bearerAuth":{}}},
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="ID de l'entreprise",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             required={"user_id"},
     *             @OA\Property(property="user_id", type="integer", example=5),
     *             @OA\Property(property="role", type="string", enum={"employee", "rh"}, example="employee", description="Par défaut: employee")
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Employé ajouté avec succès",
     *         @OA\JsonContent(
     *             @OA\Property(property="error", type="boolean", example=false),
     *             @OA\Property(property="message", type="string", example="Employé ajouté avec succès")
     *         )
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Entreprise ou utilisateur introuvable"
     *     ),
     *     @OA\Response(
     *         response=422,
     *         description="Erreur de validation"
     *     ),
     *     @OA\Response(
     *         response=403,
     *         description="Accès refusé"
     *     )
     * )
     */
    public function addEmployee(Request $request, $id)
    {
        $data = $request->validate([
            'user_id' => 'required|exists:users,id',
            'role' => 'nullable|in:employee,rh',
        ]);

        $data['role'] = $data['role'] ?? 'employee';

        $result = $this->companyService->addEmployee($id, $data);
        return response()->json($result);
    }

    /**
     * @OA\Delete(
     *     path="/api/companies/{id}/remove-employee",
     *     summary="Retirer un employé",
     *     description="Retire un employé d'une entreprise",
     *     tags={"Companies - Employees"},
     *     security={{"bearerAuth":{}}},
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="ID de l'entreprise",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             required={"user_id"},
     *             @OA\Property(property="user_id", type="integer", example=5)
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Employé retiré avec succès",
     *         @OA\JsonContent(
     *             @OA\Property(property="error", type="boolean", example=false),
     *             @OA\Property(property="message", type="string", example="Employé retiré avec succès")
     *         )
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Entreprise ou utilisateur introuvable"
     *     ),
     *     @OA\Response(
     *         response=422,
     *         description="Erreur de validation"
     *     ),
     *     @OA\Response(
     *         response=403,
     *         description="Accès refusé"
     *     )
     * )
     */
    public function removeEmployee(Request $request, $id)
    {
        $data = $request->validate([
            'user_id' => 'required|exists:users,id',
        ]);



        $result = $this->companyService->removeEmployee($id, $data);
        return response()->json($result);
    }

    /**
     * @OA\Patch(
     *     path="/api/companies/{id}/change-role",
     *     summary="Changer le rôle d'un employé",
     *     description="Modifie le rôle d'un employé dans une entreprise",
     *     tags={"Companies - Employees"},
     *     security={{"bearerAuth":{}}},
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="ID de l'entreprise",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             required={"user_id", "role"},
     *             @OA\Property(property="user_id", type="integer", example=5),
     *             @OA\Property(property="role", type="string", enum={"creator", "employee", "rh"}, example="rh")
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Rôle modifié avec succès",
     *         @OA\JsonContent(
     *             @OA\Property(property="error", type="boolean", example=false),
     *             @OA\Property(property="message", type="string", example="Rôle de l'employé modifié avec succès")
     *         )
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Entreprise ou utilisateur introuvable"
     *     ),
     *     @OA\Response(
     *         response=422,
     *         description="Erreur de validation"
     *     ),
     *     @OA\Response(
     *         response=403,
     *         description="Accès refusé"
     *     )
     * )
     */
    public function changeEmployeeRole(Request $request, $id)
    {
        $data = $request->validate([
            'user_id' => 'required|ex   ists:users,id',
            'role' => 'required|in:creator,employee,rh',
        ]);

        $result = $this->companyService->changeEmployeeRole($id, $data);
        return response()->json($result);
    }

    public function getMycompany()
    {
        return $this->companyService->myCompanies();
    }
}
