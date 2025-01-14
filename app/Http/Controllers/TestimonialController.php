<?php

namespace App\Http\Controllers;

use App\Models\Testimonial;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TestimonialController extends Controller
{
    // public function index()
    // {
    //     $testimonials = Testimonial::all()->map(function ($item) {
    //         return [
    //             'id' => $item->id,
    //             'testimonial' => $item->testimonial,
    //             'name' => $item->name,
    //             'title' => $item->title,
    //         ];
    //     })->toArray(); // Convert the collection to an array
    
    //     return $testimonials; // Return as an array
    // }
    public function index()
    {
        $testimonials = Testimonial::all();

        return Inertia::render('Dashboard', [
            'testimonials' => $testimonials->map(function ($item) {
                return [
                    'id' => $item->id,
                    'testimonial' => $item->testimonial,
                    'name' => $item->name,
                    'title' => $item->title,
                ];
            }),
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'testimonial' => 'required|string',
            'name' => 'required|string',
            'title' => 'required|string',
        ]);

        Testimonial::create($validated);

        // Redirect to testimonials page after adding new testimonial
        return Inertia::location('/testimonials');
    }

    public function update(Request $request, $id)
    {
        $testimonial = Testimonial::findOrFail($id);

        $validated = $request->validate([
            'testimonial' => 'required|string',
            'name' => 'required|string',
            'title' => 'required|string',
        ]);

        $testimonial->update($validated);

        return Inertia::location('/testimonials'); // Redirect to testimonials page after update
    }

    public function destroy($id)
    {
        $testimonial = Testimonial::findOrFail($id);
        $testimonial->delete();

        return Inertia::location('/testimonials'); // Redirect to testimonials page after delete
    }
}
