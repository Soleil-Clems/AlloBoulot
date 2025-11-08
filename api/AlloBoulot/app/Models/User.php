<?php

namespace App\Models;

use ApiPlatform\Metadata\ApiResource;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Tymon\JWTAuth\Contracts\JWTSubject;

// désactivé temporairement de 
// class User extends Authenticatable implements JWTSubject, MustVerifyEmail
#[ApiResource]
class User extends Authenticatable implements JWTSubject

{
    use HasApiTokens, Notifiable;

    protected $fillable = [
        'first_name',
        'last_name',
        'birth_date',
        'address',
        'phone',
        'email',
        'password',
        'role',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    // public function getEmailForVerification()
    // {
    //     return $this->email;
    // }
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        return [];
    }



    public function isAdmin()
    {
        return $this->role === 'admin';
    }

    public function employee()
    {
        return $this->hasOne(Employee::class);
    }

    // Toutes les companies liés à un user
    public function companies()
    {
        return $this->belongsToMany(Company::class, 'employees')
            ->withPivot('role')
            ->withTimestamps();
    }

    // Les companies créées par ce user
    public function createdCompanies()
    {
        return $this->companies()->wherePivot('role', 'creator');
    }

    // Vérifier si le user est créateur d’une company
    public function isCreatorOf(Company $company)
    {
        return $this->companies()
            ->wherePivot('role', 'creator')
            ->where('company_id', $company->id)
            ->exists();
    }


    public function jobApplications()
    {
        return $this->hasMany(JobApplication::class);
    }
}
