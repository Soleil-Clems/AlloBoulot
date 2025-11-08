<?php

namespace App\Http\Middleware;

use Illuminate\Auth\Middleware\Authenticate as Middleware;
use Illuminate\Http\Request;

class Authenticate extends Middleware
{
    /**
     * Gérer les requêtes non authentifiées.
     */
    protected function redirectTo(Request $request): ?string
    {
        if ($request->expectsJson() || $request->is('api/*')) {
            abort(response()->json([
                'message' => 'Vous êtes déjà déconnecté ou non authentifié.'
            ], 401));
        }
        return null;
    }
}
