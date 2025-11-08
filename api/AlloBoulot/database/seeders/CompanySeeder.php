<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Company;

class CompanySeeder extends Seeder
{
    public function run(): void
    {
        Company::create([
            'name' => 'AlloBoulot SARL',
            'logo' => null,
            'address' => 'Marseille, France',
            'employee_id' => 1, 
        ]);
    }
}
