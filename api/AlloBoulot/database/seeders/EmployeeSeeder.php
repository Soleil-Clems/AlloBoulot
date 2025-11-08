<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Employee;

class EmployeeSeeder extends Seeder
{
    public function run(): void
    {
        Employee::create([
            'user_id' => 2, // L'utilisateur Jean Dupont
            'post_name' => 'Recruteur RH',
        ]);
    }
}
