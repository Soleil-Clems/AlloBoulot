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
        Schema::create('job_offers', function (Blueprint $table) {
        $table->id();
        $table->unsignedBigInteger('company_id');
        $table->unsignedBigInteger('employee_id')->nullable();
        $table->unsignedBigInteger('category_id')->nullable();
        $table->text('description');
        $table->string('contract_type')->nullable();
        $table->string('study_level')->nullable();
        $table->dateTime('end_at')->nullable();
        $table->timestamps();

        $table->foreign('company_id')->references('id')->on('companies')->onDelete('cascade');
        $table->foreign('employee_id')->references('id')->on('employees')->onDelete('set null');
        $table->foreign('category_id')->references('id')->on('categories')->onDelete('set null');
    });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('job_offers');
    }
};
