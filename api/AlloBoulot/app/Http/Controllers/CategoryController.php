<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Exception;

class CategoryController extends Controller
{
    /**
     * @OA\Get(
     *     path="/api/categories",
     *     summary="Liste des catégories",
     *     description="Récupère la liste de toutes les catégories",
     *     tags={"Categories"},
     *     @OA\Response(
     *         response=200,
     *         description="Liste des catégories récupérée avec succès",
     *         @OA\JsonContent(
     *             @OA\Property(property="error", type="boolean", example=false),
     *             @OA\Property(
     *                 property="data",
     *                 type="array",
     *                 @OA\Items(
     *                     @OA\Property(property="id", type="integer", example=1),
     *                     @OA\Property(property="name", type="string", example="Plomberie"),
     *                     @OA\Property(property="icon", type="string", example="wrench"),
     *                     @OA\Property(property="created_at", type="string", format="date-time"),
     *                     @OA\Property(property="updated_at", type="string", format="date-time")
     *                 )
     *             )
     *         )
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="Erreur serveur",
     *         @OA\JsonContent(
     *             @OA\Property(property="error", type="boolean", example=true),
     *             @OA\Property(property="message", type="string", example="Erreur lors de la récupération des catégories."),
     *             @OA\Property(property="details", type="string")
     *         )
     *     )
     * )
     */
    public function index()
    {
        try {
            $categories = Category::orderBy('created_at', 'desc')->get();

            return response()->json( $categories);
        } catch (Exception $e) {
            return response()->json([
                'error' => true,
                'message' => 'Erreur lors de la récupération des catégories.',
                'details' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * @OA\Post(
     *     path="/api/categories",
     *     summary="Créer une catégorie",
     *     description="Crée une nouvelle catégorie (Admin uniquement)",
     *     tags={"Categories"},
     *     security={{"bearerAuth":{}}},
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             required={"name"},
     *             @OA\Property(property="name", type="string", maxLength=100, example="Plomberie"),
     *             @OA\Property(property="icon", type="string", maxLength=255, example="wrench")
     *         )
     *     ),
     *     @OA\Response(
     *         response=201,
     *         description="Catégorie créée avec succès",
     *         @OA\JsonContent(
     *             @OA\Property(property="error", type="boolean", example=false),
     *             @OA\Property(property="message", type="string", example="Catégorie créée avec succès."),
     *             @OA\Property(
     *                 property="data",
     *                 type="object",
     *                 @OA\Property(property="id", type="integer", example=1),
     *                 @OA\Property(property="name", type="string", example="Plomberie"),
     *                 @OA\Property(property="icon", type="string", example="wrench"),
     *                 @OA\Property(property="created_at", type="string", format="date-time"),
     *                 @OA\Property(property="updated_at", type="string", format="date-time")
     *             )
     *         )
     *     ),
     *     @OA\Response(
     *         response=403,
     *         description="Accès refusé",
     *         @OA\JsonContent(
     *             @OA\Property(property="error", type="boolean", example=true),
     *             @OA\Property(property="message", type="string", example="Accès refusé. Seuls les administrateurs peuvent créer des catégories.")
     *         )
     *     ),
     *     @OA\Response(
     *         response=422,
     *         description="Erreur de validation"
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="Erreur serveur"
     *     )
     * )
     */
    public function store(Request $request)
    {
        try {
            $authUser = Auth::user();

            if (!$authUser || $authUser->role !== 'admin') {
                return response()->json([
                    'error' => true,
                    'message' => 'Accès refusé. Seuls les administrateurs peuvent créer des catégories.'
                ], 403);
            }

            $data = $request->validate([
                'name' => 'required|string|max:100|unique:categories,name',
                'icon' => 'nullable|string|max:255',
            ]);

            $category = Category::create($data);

            return response()->json([
                'error' => false,
                'message' => 'Catégorie créée avec succès.',
                'data' => $category
            ], 201);
        } catch (Exception $e) {
            return response()->json([
                'error' => true,
                'message' => 'Erreur lors de la création de la catégorie.',
                'details' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * @OA\Get(
     *     path="/api/categories/{id}",
     *     summary="Afficher une catégorie",
     *     description="Récupère les détails d'une catégorie spécifique",
     *     tags={"Categories"},
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="ID de la catégorie",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Catégorie récupérée avec succès",
     *         @OA\JsonContent(
     *             @OA\Property(property="error", type="boolean", example=false),
     *             @OA\Property(
     *                 property="data",
     *                 type="object",
     *                 @OA\Property(property="id", type="integer", example=1),
     *                 @OA\Property(property="name", type="string", example="Plomberie"),
     *                 @OA\Property(property="icon", type="string", example="wrench"),
     *                 @OA\Property(property="created_at", type="string", format="date-time"),
     *                 @OA\Property(property="updated_at", type="string", format="date-time")
     *             )
     *         )
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Catégorie introuvable",
     *         @OA\JsonContent(
     *             @OA\Property(property="error", type="boolean", example=true),
     *             @OA\Property(property="message", type="string", example="Catégorie introuvable.")
     *         )
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="Erreur serveur"
     *     )
     * )
     */
    public function show($id)
    {
        try {
            $category = Category::find($id);

            if (!$category) {
                return response()->json([
                    'error' => true,
                    'message' => 'Catégorie introuvable.'
                ], 404);
            }

            return response()->json([
                'error' => false,
                'data' => $category
            ]);
        } catch (Exception $e) {
            return response()->json([
                'error' => true,
                'message' => 'Erreur lors de la récupération de la catégorie.',
                'details' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * @OA\Put(
     *     path="/api/categories/{id}",
     *     summary="Mettre à jour une catégorie",
     *     description="Met à jour une catégorie existante (Admin uniquement)",
     *     tags={"Categories"},
     *     security={{"bearerAuth":{}}},
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="ID de la catégorie",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\RequestBody(
     *         required=false,
     *         @OA\JsonContent(
     *             @OA\Property(property="name", type="string", maxLength=100, example="Électricité"),
     *             @OA\Property(property="icon", type="string", maxLength=255, example="bolt")
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Catégorie mise à jour avec succès",
     *         @OA\JsonContent(
     *             @OA\Property(property="error", type="boolean", example=false),
     *             @OA\Property(property="message", type="string", example="Catégorie mise à jour avec succès."),
     *             @OA\Property(
     *                 property="data",
     *                 type="object",
     *                 @OA\Property(property="id", type="integer", example=1),
     *                 @OA\Property(property="name", type="string", example="Électricité"),
     *                 @OA\Property(property="icon", type="string", example="bolt")
     *             )
     *         )
     *     ),
     *     @OA\Response(
     *         response=403,
     *         description="Accès refusé"
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Catégorie introuvable"
     *     ),
     *     @OA\Response(
     *         response=422,
     *         description="Erreur de validation"
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="Erreur serveur"
     *     )
     * )
     */
    public function update(Request $request, $id)
    {
        try {
            $authUser = Auth::user();

            if (!$authUser || $authUser->role !== 'admin') {
                return response()->json([
                    'error' => true,
                    'message' => 'Accès refusé.'
                ], 403);
            }

            $category = Category::find($id);
            if (!$category) {
                return response()->json([
                    'error' => true,
                    'message' => 'Catégorie introuvable.'
                ], 404);
            }

            $data = $request->validate([
                'name' => 'sometimes|string|max:100|unique:categories,name,' . $id,
                'icon' => 'nullable|string|max:255',
            ]);

            $category->update($data);

            return response()->json([
                'error' => false,
                'message' => 'Catégorie mise à jour avec succès.',
                'data' => $category
            ]);
        } catch (Exception $e) {
            return response()->json([
                'error' => true,
                'message' => 'Erreur lors de la mise à jour de la catégorie.',
                'details' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * @OA\Delete(
     *     path="/api/categories/{id}",
     *     summary="Supprimer une catégorie",
     *     description="Supprime une catégorie (Admin uniquement)",
     *     tags={"Categories"},
     *     security={{"bearerAuth":{}}},
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="ID de la catégorie",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Catégorie supprimée avec succès",
     *         @OA\JsonContent(
     *             @OA\Property(property="error", type="boolean", example=false),
     *             @OA\Property(property="message", type="string", example="Catégorie supprimée avec succès.")
     *         )
     *     ),
     *     @OA\Response(
     *         response=403,
     *         description="Accès refusé"
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Catégorie introuvable"
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="Erreur serveur"
     *     )
     * )
     */
    public function destroy($id)
    {
        try {
            $authUser = Auth::user();

            if (!$authUser || $authUser->role !== 'admin') {
                return response()->json([
                    'error' => true,
                    'message' => 'Accès refusé.'
                ], 403);
            }

            $category = Category::find($id);
            if (!$category) {
                return response()->json([
                    'error' => true,
                    'message' => 'Catégorie introuvable.'
                ], 404);
            }

            $category->delete();

            return response()->json([
                'error' => false,
                'message' => 'Catégorie supprimée avec succès.'
            ]);
        } catch (Exception $e) {
            return response()->json([
                'error' => true,
                'message' => 'Erreur lors de la suppression de la catégorie.',
                'details' => $e->getMessage(),
            ], 500);
        }
    }
}