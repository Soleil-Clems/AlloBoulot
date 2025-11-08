<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\EmailVerificationController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\JobOfferController;
use App\Http\Controllers\JobApplicationController;
use App\Http\Controllers\CategoryController;

Route::middleware('api')->group(function () {
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/login', [AuthController::class, 'login']);
    Route::get('/job-offers', [JobOfferController::class, 'allOffers']);
    Route::get('/job-offers/search', [JobOfferController::class, 'search']);
    Route::get('/categories', [CategoryController::class, 'index']);
    Route::get('companies/{companyId}/job-offers/{id}', [JobOfferController::class, 'show']);
    Route::get('/companies', [CompanyController::class, 'index']);

    // Route::get('/email/verify/{id}/{hash}', [EmailVerificationController::class, 'verify'])
    //     ->middleware(['signed'])
    //     ->name('verification.verify');
});

// Ce block de route contient les endpoint des user qui doivent etre authentifié
Route::middleware(['api', 'auth:api'])->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/user', [AuthController::class, 'user']);

    // Route::post('/email/resend', [EmailVerificationController::class, 'resend'])
    //     ->middleware('throttle:6,1')
    //     ->name('verification.send');
    Route::get('/users', [UserController::class, 'index']);
    Route::post('/users', [UserController::class, 'store']);
    Route::get('/users/{id}', [UserController::class, 'show']);
    Route::put('/users/{id}', [UserController::class, 'update']);
    Route::delete('/users/{id}', [UserController::class, 'destroy']);

    Route::prefix('companies')->group(function () {
        Route::get('/my', [CompanyController::class, 'getMycompany']);
        Route::post('/', [CompanyController::class, 'store']);
        Route::get('/{id}', [CompanyController::class, 'show']);
        // Route::put('/{id}', [CompanyController::class, 'update']);
        Route::put('/update/{id}', [CompanyController::class, 'update']);
        Route::delete('/{id}', [CompanyController::class, 'destroy']);
        Route::post('/{id}/add-employee', [CompanyController::class, 'addEmployee']);
        Route::delete('/{id}/remove-employee', [CompanyController::class, 'removeEmployee']);
        Route::patch('/{id}/change-role', [CompanyController::class, 'changeEmployeeRole']);
    });



    Route::prefix('companies/{companyId}/job-offers')->group(function () {
        Route::get('/', [JobOfferController::class, 'index']);
        Route::post('/', [JobOfferController::class, 'store']);
        Route::put('/{id}', [JobOfferController::class, 'update']);
        Route::delete('/{id}', [JobOfferController::class, 'destroy']);
    });

    Route::prefix('job-applications')->group(function () {
        Route::post('/', [JobApplicationController::class, 'apply']);
        Route::get('/my', [JobApplicationController::class, 'myApplications']);
        // get all application of an offer
        Route::get('/offer/{offerId}', [JobApplicationController::class, 'index']);
        Route::get('/company/{companyId}', [JobApplicationController::class, 'allApplicationsForCompany']);
        Route::put('/{applicationId}/status', [JobApplicationController::class, 'updateStatus']);
    });


    Route::post('/categories', [CategoryController::class, 'store']);
    Route::get('/categories/{id}', [CategoryController::class, 'show']);
    Route::put('/categories/{id}', [CategoryController::class, 'update']);
    Route::delete('/categories/{id}', [CategoryController::class, 'destroy']);
});
// Route::post('/upload', [UploadController::class, 'upload']);
