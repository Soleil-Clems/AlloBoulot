<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('job_applications', function (Blueprint $table) {
    
            if (Schema::hasColumn('job_applications', 'status')) {
                $table->dropColumn('status');
            }

            $table->enum('status', ['pending', 'accepted', 'rejected'])->default('pending');

        
            if (!Schema::hasColumn('job_applications', 'job_offer_id')) {
                $table->unsignedBigInteger('job_offer_id')->after('id');
                $table->foreign('job_offer_id')->references('id')->on('job_offers')->onDelete('cascade');
            }

            if (!Schema::hasColumn('job_applications', 'user_id')) {
                $table->unsignedBigInteger('user_id')->after('job_offer_id');
                $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            }
        });
    }

    public function down(): void
    {
        Schema::table('job_applications', function (Blueprint $table) {
            $table->dropColumn('status');
        });
    }
};
