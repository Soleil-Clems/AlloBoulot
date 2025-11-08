<?php
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Auth\AuthenticationException;
use Symfony\Component\Routing\Exception\RouteNotFoundException;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Exceptions\TokenInvalidException;
use Tymon\JWTAuth\Exceptions\JWTException;
use Illuminate\View\ViewServiceProvider; 

return Application::configure(basePath: dirname(__DIR__))
    ->withProviders([
        ViewServiceProvider::class, 
    ])
    ->withRouting(
        web: __DIR__ . '/../routes/web.php',
        api: __DIR__ . '/../routes/api.php',
        commands: __DIR__ . '/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        $middleware->statefulApi()
            ->validateCsrfTokens(except: ['api/*']);
    })
    ->withExceptions(function (Exceptions $exceptions) {

        $exceptions->render(function (\Throwable $e, $request) {

            if ($request->is('api/*')) {

                if ($e instanceof TokenExpiredException) {
                    return response()->json([
                        'message' => 'Le token a expiré, veuillez vous reconnecter.'
                    ], 401);
                }

                if ($e instanceof TokenInvalidException) {
                    return response()->json([
                        'message' => 'Token invalide.'
                    ], 401);
                }

                if ($e instanceof JWTException) {
                    return response()->json([
                        'message' => 'Aucun token fourni.'
                    ], 401);
                }

                if ($e instanceof AuthenticationException) {
                    return response()->json([
                        'message' => 'Vous êtes déjà déconnecté ou non authentifié.'
                    ], 401);
                }

                if ($e instanceof RouteNotFoundException) {
                    return response()->json([
                        'error'=> true,
                        'message' => 'Route non trouvée ou accès non autorisé.'
                    ], 404);
                }

                return response()->json([
                    'message' => $e->getMessage(),
                ], 500);
            }
        });
    })
    ->create();
