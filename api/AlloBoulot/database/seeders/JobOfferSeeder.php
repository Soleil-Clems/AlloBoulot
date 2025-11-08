<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\JobOffer;

class JobOfferSeeder extends Seeder
{
    public function run(): void
    {
        JobOffer::create([
            'company_id' => 1,
            'employee_id' => 1,
            'category_id' => 1,
            'description' => 'Développeur Web Full Stack (Laravel + React)',
            'contract_type' => 'CDI',
            'study_level' => 'Bac +3',
            'end_at' => now()->addMonths(2),
        ]);
        JobOffer::create([
            'company_id' => 1,
            'employee_id' => 1,
            'category_id' => 2,
            'description' => 'Assistant',
            'contract_type' => 'stage',
            'study_level' => 'Bac +2',
            'end_at' => now()->addMonths(1),
        ]);
        JobOffer::create([
            'company_id' => 1,
            'employee_id' => 1,
            'category_id' => 1,
            'description' => 'Développeur mobile',
            'contract_type' => 'Alternance',
            'study_level' => 'Bac +3',
            'end_at' => now()->addMonths(2),
        ]);
    }
}
