<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use App\Exceptions\ApiException;
use Tymon\JWTAuth\Exceptions\JWTException;

class AuthController extends Controller
{
    /**
     * @OA\Post(
     *     path="/api/register",
     *     summary="Inscription d'un nouvel utilisateur",
     *     description="Crée un nouveau compte utilisateur",
     *     tags={"Auth"},
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             required={"first_name", "last_name", "email", "password", "password_confirmation"},
     *             @OA\Property(property="first_name", type="string", maxLength=50, example="John"),
     *             @OA\Property(property="last_name", type="string", maxLength=50, example="Doe"),
     *             @OA\Property(property="birth_date", type="string", format="date", example="1990-01-01"),
     *             @OA\Property(property="address", type="string", maxLength=255, example="123 rue Example"),
     *             @OA\Property(property="phone", type="string", maxLength=20, example="+33612345678"),
     *             @OA\Property(property="email", type="string", format="email", example="test@gmail.com"),
     *             @OA\Property(property="password", type="string", format="password", minLength=6, example="testtest"),
     *             @OA\Property(property="password_confirmation", type="string", format="password", example="testtest")
     *         )
     *     ),
     *     @OA\Response(
     *         response=201,
     *         description="Inscription réussie",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="Inscription réussie. Vous pouvez désormais vous connecter"),
     *             @OA\Property(
     *                 property="user",
     *                 type="object",
     *                 @OA\Property(property="id", type="integer", example=1),
     *                 @OA\Property(property="first_name", type="string", example="John"),
     *                 @OA\Property(property="last_name", type="string", example="Doe"),
     *                 @OA\Property(property="email", type="string", example="test@gmail.com"),
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
     *         response=422,
     *         description="Erreur de validation",
     *         @OA\JsonContent(
     *             @OA\Property(property="error", type="boolean", example=true),
     *             @OA\Property(property="message", type="string", example="Erreur de validation"),
     *             @OA\Property(property="errors", type="object")
     *         )
     *     )
     * )
     */
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'first_name' => 'required|string|max:50',
            'last_name'  => 'required|string|max:50',
            'birth_date' => 'nullable|date',
            'address'    => 'nullable|string|max:255',
            'phone'      => 'nullable|string|max:20',
            'email'      => 'required|email|unique:users,email',
            'password'   => 'required|string|min:6|confirmed',
        ]);

        if ($validator->fails()) {
            throw new ApiException("Erreur de validation", 422, $validator->errors());
        }

        $user = User::create([
            'first_name' => $request->first_name,
            'last_name'  => $request->last_name,
            'birth_date' => $request->birth_date ?? null,
            'address'    => $request->address ?? null,
            'phone'      => $request->phone ?? null,
            'email'      => $request->email,
            'password'   => Hash::make($request->password),
            'role'       => 'user',
        ]);

        return response()->json([
            'message' => 'Inscription réussie. Vous pouvez désormais vous connecter',
            'user' => $user
        ], 201);
    }

    /**
     * @OA\Post(
     *     path="/api/login",
     *     summary="Connexion utilisateur",
     *     description="Authentifie un utilisateur et renvoie un token JWT",
     *     tags={"Auth"},
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             required={"email", "password"},
     *             @OA\Property(property="email", type="string", format="email", example="test@gmail.com"),
     *             @OA\Property(property="password", type="string", format="password", example="testtest")
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Connexion réussie",
     *         @OA\JsonContent(
     *             @OA\Property(
     *                 property="user",
     *                 type="object",
     *                 @OA\Property(property="id", type="integer", example=1),
     *                 @OA\Property(property="first_name", type="string", example="John"),
     *                 @OA\Property(property="last_name", type="string", example="Doe"),
     *                 @OA\Property(property="email", type="string", example="john@example.com"),
     *                 @OA\Property(property="role", type="string", example="user")
     *             ),
     *             @OA\Property(property="access_token", type="string", example="eyJ0eXAiOiJKV1QiLCJhbGc..."),
     *             @OA\Property(property="token_type", type="string", example="bearer"),
     *             @OA\Property(property="expires_in", type="integer", example=3600)
     *         )
     *     ),
     *     @OA\Response(
     *         response=401,
     *         description="Identifiants invalides",
     *         @OA\JsonContent(
     *             @OA\Property(property="error", type="boolean", example=true),
     *             @OA\Property(property="message", type="string", example="Identifiants invalides.")
     *         )
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="Erreur serveur",
     *         @OA\JsonContent(
     *             @OA\Property(property="error", type="boolean", example=true),
     *             @OA\Property(property="message", type="string", example="Impossible de créer le token.")
     *         )
     *     )
     * )
     */
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        try {
            if (!$token = auth('api')->attempt($credentials)) {
                throw new ApiException("Identifiants invalides.", 401);
            }
        } catch (JWTException $e) {
            throw new ApiException("Impossible de créer le token.", 500);
        }

        $user = auth('api')->user();

        return response()->json([
            'user' => $user,
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth('api')->factory()->getTTL() * 6000,
        ]);
    }

    /**
     * @OA\Post(
     *     path="/api/logout",
     *     summary="Déconnexion utilisateur",
     *     description="Révoque le token JWT de l'utilisateur authentifié",
     *     tags={"Auth"},
     *     security={{"bearerAuth":{}}},
     *     @OA\Response(
     *         response=200,
     *         description="Déconnexion réussie",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="Déconnexion réussie.")
     *         )
     *     ),
     *     @OA\Response(
     *         response=401,
     *         description="Token invalide ou déjà expiré",
     *         @OA\JsonContent(
     *             @OA\Property(property="error", type="boolean", example=true),
     *             @OA\Property(property="message", type="string", example="Token invalide ou déjà expiré.")
     *         )
     *     )
     * )
     */
    public function logout()
    {
        $user = auth('api')->user();
        if (!$user) {
            throw new ApiException("Vous êtes déjà déconnecté.", 200);
        }

        try {
            auth('api')->logout();
        } catch (JWTException $e) {
            throw new ApiException("Token invalide ou déjà expiré.", 401);
        }

        return response()->json(['message' => 'Déconnexion réussie.']);
    }

    /**
     * @OA\Get(
     *     path="/api/user",
     *     summary="Récupérer l'utilisateur authentifié",
     *     description="Retourne les informations de l'utilisateur actuellement connecté",
     *     tags={"Auth"},
     *     security={{"bearerAuth":{}}},
     *     @OA\Response(
     *         response=200,
     *         description="Informations de l'utilisateur",
     *         @OA\JsonContent(
     *             @OA\Property(property="id", type="integer", example=1),
     *             @OA\Property(property="first_name", type="string", example="John"),
     *             @OA\Property(property="last_name", type="string", example="Doe"),
     *             @OA\Property(property="email", type="string", example="john@example.com"),
     *             @OA\Property(property="birth_date", type="string", example="1990-01-01"),
     *             @OA\Property(property="address", type="string", example="123 rue Example"),
     *             @OA\Property(property="phone", type="string", example="+33612345678"),
     *             @OA\Property(property="role", type="string", example="user"),
     *             @OA\Property(property="created_at", type="string", format="date-time"),
     *             @OA\Property(property="updated_at", type="string", format="date-time")
     *         )
     *     ),
     *     @OA\Response(
     *         response=401,
     *         description="Non authentifié",
     *         @OA\JsonContent(
     *             @OA\Property(property="error", type="boolean", example=true),
     *             @OA\Property(property="message", type="string", example="Non authentifié.")
     *         )
     *     )
     * )
     */
    public function user()
    {
        $user = auth('api')->user();
        if (!$user) {
            throw new ApiException("Non authentifié.", 401);
        }
        return response()->json($user);
    }
}