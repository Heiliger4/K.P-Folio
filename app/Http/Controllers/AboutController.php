<?php
namespace App\Http\Controllers;

use App\Models\About;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AboutController extends Controller
{
    public function index()
    {
        // Fetch the first home
        $about = About::first();
    
        // Pass home data to the front end
        return [
                'about_description' => $about->about_description,
            ];
    }
    public function update(Request $request, $id)
    {
        $about = About::updateAbout($id, $request->only(['about_description']));
        return response()->json($about);
    }
}
