<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\JobApplication;

class JobApplicationSeeder extends Seeder
{
    public function run(): void
    {
        JobApplication::create([
            'job_offer_id' => 1,
            'user_id' => 2,
            'message' => 'Je suis intéressé par le poste de développeur.',
            'resume_ref' => 'resume.pdf',
            'motivation_ref' => 'motivation.pdf',
            'status' => 'pending',
        ]);
    }
}
