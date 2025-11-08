<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('categories', function (Blueprint $table) {
            if (!Schema::hasColumn('categories', 'icon')) {
                $table->string('icon')->nullable()->after('name');
            }
        });

        Schema::table('job_offers', function (Blueprint $table) {
            if (!Schema::hasColumn('job_offers', 'category_id')) {
                $table->unsignedBigInteger('category_id')->nullable()->after('employee_id');
                $table->foreign('category_id')->references('id')->on('categories')->onDelete('set null');
            }
        });
    }

    public function down(): void
    {
        Schema::table('categories', function (Blueprint $table) {
            if (Schema::hasColumn('categories', 'icon')) {
                $table->dropColumn('icon');
            }
        });

        Schema::table('job_offers', function (Blueprint $table) {
            if (Schema::hasColumn('job_offers', 'category_id')) {
                $table->dropForeign(['category_id']);
                $table->dropColumn('category_id');
            }
        });
    }
};
