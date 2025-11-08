<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        // creation d'un administrateur
        User::create([
            'first_name' => 'Admin',
            'last_name'  => 'AlloBoulot',
            'birth_date' => '1990-01-01',
            'address'    => 'Paris, France',
            'phone'      => '0600000000',
            'email'       => 'admin@alloboulot.com',
            'password'   => Hash::make('password_admin'),
            'role'       => 'admin',
            'email_verified_at' => now(),
        ]);
        User::create([
            'first_name' =>'alice',
            'last_name' =>'paul',
            'birth_date' =>'1999-10-23',
            'address' =>'marseille',
            'phone' =>'987654329',
            'email' =>'alice@gmail.com',
            'password' => Hash::make('password'),
            'role' => 'user',
            'email_verified_at' => now(),       
        ]);
    }
}
