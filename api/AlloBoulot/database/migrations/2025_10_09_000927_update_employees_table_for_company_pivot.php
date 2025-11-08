<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('employees', function (Blueprint $table) {
            if (Schema::hasColumn('employees', 'post_name')) {
                $table->dropColumn('post_name');
            }

            if (!Schema::hasColumn('employees', 'company_id')) {
                $table->unsignedBigInteger('company_id')->after('user_id');
                $table->foreign('company_id')->references('id')->on('companies')->onDelete('cascade');
            }

            if (!Schema::hasColumn('employees', 'role')) {
                $table->enum('role', ['creator', 'employee'])->default('employee')->after('company_id');
            }

            $table->unique(['user_id', 'company_id']);
        });
    }

    public function down(): void
    {
        Schema::table('employees', function (Blueprint $table) {
            $table->dropUnique(['user_id', 'company_id']);

            if (Schema::hasColumn('employees', 'company_id')) {
                $table->dropForeign(['company_id']);
                $table->dropColumn('company_id');
            }

            if (Schema::hasColumn('employees', 'role')) {
                $table->dropColumn('role');
            }

            if (!Schema::hasColumn('employees', 'post_name')) {
                $table->string('post_name')->after('user_id');
            }
        });
    }
};
