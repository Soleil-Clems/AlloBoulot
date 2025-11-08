<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Auth\Events\Verified;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\URL;

class EmailVerificationController extends Controller
{
    // ✅ Vérifie le lien email
    public function verify(Request $request, $id, $hash)
    {
        $user = User::findOrFail($id);

        // Vérifie la validité du lien signé
        if (! URL::hasValidSignature($request)) {
            return response()->json(['message' => 'Lien de vérification invalide ou expiré.'], 401);
        }

        // Si déjà vérifié
        if ($user->hasVerifiedEmail()) {
            return response()->json(['message' => 'Adresse déjà vérifiée.']);
        }

        // Vérifie le hash
        if (! hash_equals(sha1($user->getEmailForVerification()), $hash)) {
            return response()->json(['message' => 'Lien de vérification invalide.'], 403);
        }

        // Marque l'email comme vérifié
        $user->markEmailAsVerified();
        event(new Verified($user));

        // ✅ Réponse backend ou redirection vers ton front
        return response()->json([
            'message' => 'Adresse email vérifiée avec succès. Vous pouvez maintenant vous connecter.'
        ]);
    }

    // 🔄 Renvoie le lien de vérification
    public function resend(Request $request)
    {
        if ($request->user()->hasVerifiedEmail()) {
            return response()->json(['message' => 'Adresse déjà vérifiée.']);
        }

        $request->user()->sendEmailVerificationNotification();

        return response()->json(['message' => 'Nouveau lien envoyé.']);
    }
}
