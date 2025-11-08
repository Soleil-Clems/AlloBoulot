<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('job_offers', function (Blueprint $table) {
            if (!Schema::hasColumn('job_offers', 'title')) {
                $table->string('title')->after('id');
            }

            if (!Schema::hasColumn('job_offers', 'company_id')) {
                $table->unsignedBigInteger('company_id')->after('id');
                $table->foreign('company_id')->references('id')->on('companies')->onDelete('cascade');
            }

            if (!Schema::hasColumn('job_offers', 'employee_id')) {
                $table->unsignedBigInteger('employee_id')->nullable()->after('company_id');
                $table->foreign('employee_id')->references('id')->on('employees')->onDelete('set null');
            }

            if (!Schema::hasColumn('job_offers', 'category_id')) {
                $table->unsignedBigInteger('category_id')->nullable()->after('employee_id');
                $table->foreign('category_id')->references('id')->on('categories')->onDelete('set null');
            }

            if (!Schema::hasColumn('job_offers', 'title')) {
                $table->string('title')->nullable()->after('id');
            }

            if (!Schema::hasColumn('job_offers', 'description')) {
                $table->text('description')->nullable();
            }

            if (!Schema::hasColumn('job_offers', 'contract_type')) {
                $table->string('contract_type')->nullable();
            }

            if (!Schema::hasColumn('job_offers', 'study_level')) {
                $table->string('study_level')->nullable();
            }

            if (!Schema::hasColumn('job_offers', 'end_at')) {
                $table->dateTime('end_at')->nullable();
            }
        });
    }

    public function down(): void
    {
        Schema::table('job_offers', function (Blueprint $table) {
            if (Schema::hasColumn('job_offers', 'title')) {
                $table->dropColumn('title');
            }
        });
    }
};
