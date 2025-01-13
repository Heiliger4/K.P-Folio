<?php

namespace App\Http\Controllers;

use App\Http\Controllers\HomeController;
use App\Http\Controllers\AboutController;
use Inertia\Inertia;

class WelcomeController extends Controller
{
    protected $homeController;
    protected $aboutController;

    public function __construct(HomeController $homeController, AboutController $aboutController)
    {
        $this->homeController = $homeController;
        $this->aboutController = $aboutController;
    }

    public function index()
    {
        $homeData = $this->homeController->index();
        $aboutData = $this->aboutController->index();

        // dd($homeData);
        return Inertia::render('Welcome', [
            'homes' => $homeData,
            'abouts' => $aboutData,
        ]);    
    }
}
