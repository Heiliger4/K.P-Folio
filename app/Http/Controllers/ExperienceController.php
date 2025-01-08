<?php
namespace App\Http\Controllers;

use App\Models\Experience;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ExperienceController extends Controller
{
    public function index()
    {
        // Fetch all experiences
        $experiences = Experience::all();
        
        // Pass Experience data to the frontend
        return Inertia::render('Welcome', [
            'experiences' => [
                'experiences' => $experiences->map(function ($experience) {
                    return [
                        'start_year' => $experience->start_year,
                        'end_year' => $experience->end_year,
                        'title' => $experience->title,
                        'sub_title' => $experience->sub_title,
                    ];
                }),
            ],
        ]);
    }
    

    // Update an existing experience
    public function update(Request $request, $id)
    {
        $experience = Experience::updateExperience($id, $request->only(['title', 'sub_title', 'years']));
        return response()->json($experience);
    }
}
