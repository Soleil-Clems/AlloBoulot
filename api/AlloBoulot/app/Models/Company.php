<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    protected $fillable = [
        "name",
        "logo",
        "address",
        "description"
    ];

    // Tous les users liés à la company
    public function users()
    {
        return $this->belongsToMany(User::class, 'employees')
            ->withPivot('role')
            ->withTimestamps();
    }

    // Employés (hors créateurs)
    public function employees()
    {
        return $this->users()->wherePivot('role', '!=', 'creator');
    }

    public function belongsToCompany(User $user): bool
    {
        return $this->users()
            ->where('user_id', $user->id)
            ->exists();
    }



    // Si jamais une company peut avoir plusieurs créateurs :
    public function creator()
    {
        return $this->users()->wherePivot('role', 'creator');
    }

    public function isCreator(User $user): bool
    {
        return $this->users()
            ->wherePivot('role', 'creator')
            ->where('user_id', $user->id)
            ->exists();
    }

    public function isRh(User $user): bool
    {
        return $this->users()
            ->wherePivot('role', 'rh')
            ->where('user_id', $user->id)
            ->exists();
    }

    public function isEmployee(User $user): bool
    {
        return $this->users()
            ->wherePivot('role', 'employee')
            ->where('user_id', $user->id)
            ->exists();
    }


    public static function getCreatedBy(User $user)
    {
        return self::whereHas('users', function ($query) use ($user) {
            $query->where('employees.user_id', $user->id)
                ->where('employees.role', 'creator');
        })->get();
    }
}
