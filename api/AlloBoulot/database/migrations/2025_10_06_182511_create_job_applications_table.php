<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('job_applications', function (Blueprint $table) {
        $table->id();
        $table->unsignedBigInteger('job_offer_id');
        $table->unsignedBigInteger('user_id');
        $table->text('message')->nullable();
        $table->string('resume_ref')->nullable();
        $table->string('motivation_ref')->nullable();
        $table->string('status')->default('pending');
        $table->timestamps();

        $table->foreign('job_offer_id')->references('id')->on('job_offers')->onDelete('cascade');
        $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
    });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('job_applications');
    }
};
