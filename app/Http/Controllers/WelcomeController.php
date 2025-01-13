<?php

namespace App\Http\Controllers;

use App\Http\Controllers\HomeController;
use App\Http\Controllers\AboutController;
use App\Http\Controllers\ExperienceController;
use App\Http\Controllers\TestimonialController;
use App\Http\Controllers\SocialLinkController;
use Inertia\Inertia;

class WelcomeController extends Controller
{
    protected $homeController;
    protected $aboutController;
    protected $experienceController;
    protected $testimonialController;
    protected $socialLinkController;

    public function __construct(HomeController $homeController, AboutController $aboutController, ExperienceController $experienceController, TestimonialController $testimonialController, SocialLinkController $socialLinkController)
    {
        $this->homeController = $homeController;
        $this->aboutController = $aboutController;
        $this->experienceController = $experienceController;
        $this->testimonialController = $testimonialController;
        $this->socialLinkController = $socialLinkController;
    }

    public function index()
    {
        $homeData = $this->homeController->index();
        $aboutData = $this->aboutController->index();
        $experienceData = $this->experienceController->index();
        $testimonialData = $this->testimonialController->index();
        $socialLinkData = $this->socialLinkController->index();

        // dd($homeData);
        return Inertia::render('Welcome', [
            'homes' => $homeData,
            'abouts' => $aboutData,
            'experiences' => $experienceData['experiences'],
            'testimonials' => $testimonialData['testimonials'],
            'socialLinks' => $socialLinkData['socialLinks'],
        ]);    
    }
}


