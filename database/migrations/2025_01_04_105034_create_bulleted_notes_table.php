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
        Schema::create('bulleted_notes', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('experience_id');
            $table->text('note');
            $table->timestamps();

            $table->foreign('experience_id')->references('id')->on('experiences')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bulleted_notes');
    }
};
