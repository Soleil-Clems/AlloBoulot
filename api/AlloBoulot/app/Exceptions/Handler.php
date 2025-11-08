<?php

namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Throwable;
use App\Exceptions\ApiException;
use Illuminate\Validation\ValidationException;

class Handler extends ExceptionHandler
{
    /**
     * Les types d'exceptions qui ne doivent pas être enregistrées.
     *
     * @var array<int, class-string<Throwable>>
     */
    protected $dontReport = [
        //
    ];

    /**
     * Les inputs qui ne doivent jamais être partagés pour la validation des exceptions.
     *
     * @var array<int, string>
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Gérer une exception et la transformer en réponse HTTP.
     */
    public function render($request, Throwable $exception)
    {
        // Gestion des ApiException
        if ($exception instanceof ApiException) {
            return response()->json([
                'error' => true,
                'message' => $exception->getMessage(),
            ], $exception->getStatusCode());
        }

        // Gestion des erreurs de validation
        if ($exception instanceof ValidationException) {
            return response()->json([
                'error' => true,
                'message' => $exception->errors(),
            ], 422);
        }

        // Toutes les autres exceptions
        if ($request->expectsJson() || $request->is('api/*')) {
            return response()->json([
                'error' => true,
                'message' => $exception->getMessage(),
            ], 500);
        }

        // Sinon utiliser le comportement par défaut
        return parent::render($request, $exception);
    }
}
