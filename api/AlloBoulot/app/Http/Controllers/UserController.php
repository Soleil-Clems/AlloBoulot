<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Exceptions\ApiException;


class UserController extends Controller
{
    /**
     * @OA\Get(
     *     path="/api/users",
     *     summary="Liste des utilisateurs",
     *     description="Récupère la liste paginée de tous les utilisateurs (Admin uniquement)",
     *     tags={"Users"},
     *     security={{"bearerAuth":{}}},
     *     @OA\Parameter(
     *         name="per_page",
     *         in="query",
     *         description="Nombre d'éléments par page",
     *         required=false,
     *         @OA\Schema(type="integer", default=10)
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Liste des utilisateurs récupérée avec succès",
     *         @OA\JsonContent(
     *             @OA\Property(property="error", type="boolean", example=false),
     *             @OA\Property(property="message", type="string", example="Liste des utilisateurs récupérée avec succès."),
     *             @OA\Property(
     *                 property="data",
     *                 type="object",
     *                 @OA\Property(property="current_page", type="integer", example=1),
     *                 @OA\Property(
     *                     property="data",
     *                     type="array",
     *                     @OA\Items(
     *                         @OA\Property(property="id", type="integer", example=1),
     *                         @OA\Property(property="first_name", type="string", example="John"),
     *                         @OA\Property(property="last_name", type="string", example="Doe"),
     *                         @OA\Property(property="email", type="string", example="john@example.com"),
     *                         @OA\Property(property="birth_date", type="string", format="date", example="1990-01-01"),
     *                         @OA\Property(property="address", type="string", example="123 rue Example"),
     *                         @OA\Property(property="phone", type="string", example="+33612345678"),
     *                         @OA\Property(property="role", type="string", example="user"),
     *                         @OA\Property(property="created_at", type="string", format="date-time"),
     *                         @OA\Property(property="updated_at", type="string", format="date-time")
     *                     )
     *                 ),
     *                 @OA\Property(property="total", type="integer", example=50),
     *                 @OA\Property(property="per_page", type="integer", example=10)
     *             )
     *         )
     *     ),
     *     @OA\Response(
     *         response=403,
     *         description="Accès refusé",
     *         @OA\JsonContent(
     *             @OA\Property(property="error", type="boolean", example=true),
     *             @OA\Property(property="message", type="string", example="Accès refusé. Seuls les administrateurs peuvent voir tous les utilisateurs.")
     *         )
     *     ),
     *     @OA\Response(
     *         response=401,
     *         description="Non authentifié"
     *     )
     * )
     */
    public function index(Request $request)
    {
        $authUser = auth()->user();
        if (!$authUser->isAdmin()) {
            throw new ApiException("Accès refusé. Seuls les administrateurs peuvent voir tous les utilisateurs.", 403);
        }

        $perPage = $request->query('per_page', 10);
        $users = User::paginate($perPage);

        return response()->json([
            'error' => false,
            'message' => 'Liste des utilisateurs récupérée avec succès.',
            'data' => $users
        ]);
    }

    /**
     * @OA\Post(
     *     path="/api/users",
     *     summary="Créer un nouvel utilisateur",
     *     description="Crée un nouvel utilisateur (Admin uniquement)",
     *     tags={"Users"},
     *     security={{"bearerAuth":{}}},
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             required={"first_name", "last_name", "email", "password"},
     *             @OA\Property(property="first_name", type="string", maxLength=50, example="John"),
     *             @OA\Property(property="last_name", type="string", maxLength=50, example="Doe"),
     *             @OA\Property(property="birth_date", type="string", format="date", example="1990-01-01"),
     *             @OA\Property(property="address", type="string", maxLength=255, example="123 rue Example"),
     *             @OA\Property(property="phone", type="string", maxLength=20, example="+33612345678"),
     *             @OA\Property(property="email", type="string", format="email", example="john@example.com"),
     *             @OA\Property(property="password", type="string", format="password", minLength=6, example="password123"),
     *             @OA\Property(property="role", type="string", enum={"user", "admin"}, example="user")
     *         )
     *     ),
     *     @OA\Response(
     *         response=201,
     *         description="Utilisateur créé avec succès",
     *         @OA\JsonContent(
     *             @OA\Property(property="error", type="boolean", example=false),
     *             @OA\Property(property="message", type="string", example="Utilisateur créé avec succès."),
     *             @OA\Property(
     *                 property="data",
     *                 type="object",
     *                 @OA\Property(property="id", type="integer", example=1),
     *                 @OA\Property(property="first_name", type="string", example="John"),
     *                 @OA\Property(property="last_name", type="string", example="Doe"),
     *                 @OA\Property(property="email", type="string", example="john@example.com"),
     *                 @OA\Property(property="birth_date", type="string", example="1990-01-01"),
     *                 @OA\Property(property="address", type="string", example="123 rue Example"),
     *                 @OA\Property(property="phone", type="string", example="+33612345678"),
     *                 @OA\Property(property="role", type="string", example="user"),
     *                 @OA\Property(property="created_at", type="string", format="date-time"),
     *                 @OA\Property(property="updated_at", type="string", format="date-time")
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
     *     )
     * )
     */
    public function store(Request $request)
    {
        $authUser = auth()->user();
        if (!$authUser->isAdmin()) {
            throw new ApiException("Accès refusé. Seuls les administrateurs peuvent créer des utilisateurs.", 403);
        }

        $data = $request->validate([
            'first_name' => 'required|string|max:50',
            'last_name'  => 'required|string|max:50',
            'birth_date' => 'nullable|date',
            'address'    => 'nullable|string|max:255',
            'phone'      => 'nullable|string|max:20',
            'email'      => 'required|email|unique:users,email',
            'password'   => 'required|string|min:6',
            'role'       => 'nullable|string|in:user,admin'
        ]);

        $data['password'] = Hash::make($data['password']);
        $user = User::create($data);

        return response()->json([
            'error' => false,
            'message' => 'Utilisateur créé avec succès.',
            'data' => $user
        ], 201);
    }

    /**
     * @OA\Get(
     *     path="/api/users/{id}",
     *     summary="Afficher un utilisateur",
     *     description="Récupère les détails d'un utilisateur spécifique. Les utilisateurs peuvent voir leur propre profil, les admins peuvent voir tous les profils.",
     *     tags={"Users"},
     *     security={{"bearerAuth":{}}},
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="ID de l'utilisateur",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Utilisateur récupéré avec succès",
     *         @OA\JsonContent(
     *             @OA\Property(property="error", type="boolean", example=false),
     *             @OA\Property(property="message", type="string", example="Utilisateur récupéré avec succès."),
     *             @OA\Property(
     *                 property="data",
     *                 type="object",
     *                 @OA\Property(property="id", type="integer", example=1),
     *                 @OA\Property(property="first_name", type="string", example="John"),
     *                 @OA\Property(property="last_name", type="string", example="Doe"),
     *                 @OA\Property(property="email", type="string", example="john@example.com"),
     *                 @OA\Property(property="birth_date", type="string", example="1990-01-01"),
     *                 @OA\Property(property="address", type="string", example="123 rue Example"),
     *                 @OA\Property(property="phone", type="string", example="+33612345678"),
     *                 @OA\Property(property="role", type="string", example="user"),
     *                 @OA\Property(property="created_at", type="string", format="date-time"),
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
     *         description="Utilisateur non trouvé"
     *     )
     * )
     */
    public function show($id)
    {
        $authUser = auth()->user();
        $user = User::findOrFail($id);

        if (!$authUser->isAdmin() && $authUser->id !== $user->id) {
            throw new ApiException("Accès refusé. Vous ne pouvez consulter que votre propre profil.", 403);
        }

        return response()->json([
            'error' => false,
            'message' => 'Utilisateur récupéré avec succès.',
            'data' => $user
        ]);
    }

    /**
     * @OA\Put(
     *     path="/api/users/{id}",
     *     summary="Mettre à jour un utilisateur",
     *     description="Met à jour les informations d'un utilisateur. Les utilisateurs peuvent modifier leur propre profil, les admins peuvent modifier tous les profils.",
     *     tags={"Users"},
     *     security={{"bearerAuth":{}}},
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="ID de l'utilisateur",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\RequestBody(
     *         required=false,
     *         @OA\JsonContent(
     *             @OA\Property(property="first_name", type="string", maxLength=50, example="John"),
     *             @OA\Property(property="last_name", type="string", maxLength=50, example="Doe"),
     *             @OA\Property(property="birth_date", type="string", format="date", example="1990-01-01"),
     *             @OA\Property(property="address", type="string", maxLength=255, example="123 rue Example"),
     *             @OA\Property(property="phone", type="string", maxLength=20, example="+33612345678"),
     *             @OA\Property(property="email", type="string", format="email", example="john@example.com"),
     *             @OA\Property(property="password", type="string", format="password", minLength=6, example="newpassword123"),
     *             @OA\Property(property="role", type="string", enum={"user", "admin"}, example="user", description="Uniquement modifiable par les admins")
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Utilisateur mis à jour avec succès",
     *         @OA\JsonContent(
     *             @OA\Property(property="error", type="boolean", example=false),
     *             @OA\Property(property="message", type="string", example="Utilisateur mis à jour avec succès."),
     *             @OA\Property(
     *                 property="data",
     *                 type="object",
     *                 @OA\Property(property="id", type="integer", example=1),
     *                 @OA\Property(property="first_name", type="string", example="John"),
     *                 @OA\Property(property="last_name", type="string", example="Doe"),
     *                 @OA\Property(property="email", type="string", example="john@example.com"),
     *                 @OA\Property(property="role", type="string", example="user")
     *             )
     *         )
     *     ),
     *     @OA\Response(
     *         response=403,
     *         description="Accès refusé"
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Utilisateur non trouvé"
     *     ),
     *     @OA\Response(
     *         response=422,
     *         description="Erreur de validation"
     *     )
     * )
     */
    public function update(Request $request, $id)
    {
        $authUser = auth()->user();
        $user = User::findOrFail($id);

        if (!$authUser->isAdmin() && $authUser->id !== $user->id) {
            throw new ApiException("Accès refusé. Vous ne pouvez modifier que votre propre profil.", 403);
        }

        $data = $request->validate([
            'first_name' => 'sometimes|string|max:50',
            'last_name'  => 'sometimes|string|max:50',
            'birth_date' => 'nullable|date',
            'address'    => 'nullable|string|max:255',
            'phone'      => 'nullable|string|max:20',
            'email'      => 'sometimes|email|unique:users,email,' . $id,
            'password'   => 'nullable|string|min:6',
            'role'       => 'nullable|string|in:user,admin'
        ]);

        if (!$authUser->isAdmin()) {
            unset($data['role']);
        }

        if (!empty($data['password'])) {
            $data['password'] = Hash::make($data['password']);
        }

        $user->update($data);

        return response()->json([
            'error' => false,
            'message' => 'Utilisateur mis à jour avec succès.',
            'data' => $user
        ]);
    }

    /**
     * @OA\Delete(
     *     path="/api/users/{id}",
     *     summary="Supprimer un utilisateur",
     *     description="Supprime un utilisateur. Les utilisateurs peuvent supprimer leur propre compte, les admins peuvent supprimer tous les comptes.",
     *     tags={"Users"},
     *     security={{"bearerAuth":{}}},
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="ID de l'utilisateur",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Utilisateur supprimé avec succès",
     *         @OA\JsonContent(
     *             @OA\Property(property="error", type="boolean", example=false),
     *             @OA\Property(property="message", type="string", example="Utilisateur supprimé avec succès.")
     *         )
     *     ),
     *     @OA\Response(
     *         response=403,
     *         description="Accès refusé"
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Utilisateur non trouvé"
     *     )
     * )
     */
    public function destroy($id)
    {
        $authUser = auth()->user();
        $user = User::findOrFail($id);

        if (!$authUser->isAdmin() && $authUser->id !== $user->id) {
            throw new ApiException("Accès refusé. Vous ne pouvez supprimer que votre propre compte.", 403);
        }

        $user->delete();

        return response()->json([
            'error' => false,
            'message' => 'Utilisateur supprimé avec succès.'
        ]);
    }
}