<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\AboutController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\SkillController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\ExperienceController;
use App\Http\Controllers\TestimonialController;
use App\Http\Controllers\ContactFormController;
use App\Http\Controllers\SocialLinkController;
use App\Http\Controllers\TechStackController;
use App\Http\Controllers\BulletedNoteController;




Route::get('/', function () {
    return Inertia::render('Welcome', [
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::put('/homes/{id}', [HomeController::class, 'update']);
Route::put('/abouts/{id}', [AboutController::class, 'update']);

Route::post('/projects', [ProjectController::class, 'store']);
Route::put('/projects/{id}', [ProjectController::class, 'update']);
Route::delete('/projects/{id}', [ProjectController::class, 'destroy']);

Route::post('/skills', [SkillController::class, 'store']);
Route::put('/skills/{id}', [SkillController::class, 'update']);
Route::delete('/skills/{id}', [SkillController::class, 'destroy']);

Route::post('/courses', [CourseController::class, 'store']);
Route::put('/courses/{id}', [CourseController::class, 'update']);
Route::delete('/courses/{id}', [CourseController::class, 'destroy']);

Route::put('/testimonials/{id}', [TestimonialController::class, 'update']);
Route::get('/testimonials/{id}/edit', [TestimonialController::class, 'edit']);
Route::delete('/testimonials/{id}', [TestimonialController::class, 'destroy']);

Route::put('/experiences/{id}', [ExperienceController::class, 'update']);
Route::put('/social-links/{id}', [SocialLinkController::class, 'update']);
Route::put('/tech-stacks/{id}', [TechStackController::class, 'update']);
Route::put('/bulleted-notes/{id}', [BulletedNoteController::class, 'update']);

Route::get('/contact-forms', [ContactFormController::class, 'index']);
Route::get('/contact-forms/{id}', [ContactFormController::class, 'show']);



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
