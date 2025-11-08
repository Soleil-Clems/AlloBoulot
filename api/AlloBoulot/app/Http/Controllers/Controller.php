<?php

namespace App\Http\Controllers;


/**
 * @OA\Info(
 *     title="API Documentation",
 *     version="1.0.0",
 *     description="Documentation de l'API Laravel"
 * )
 * @OA\Server(
 *     url="http://localhost:8000",
 *     description="Serveur local"
 * )
 * @OA\SecurityScheme(
 *     securityScheme="bearerAuth",
 *     type="http",
 *     scheme="bearer",
 *     bearerFormat="JWT",
 *     description="Entrez votre token JWT"
 * )
 */

abstract class Controller {}
