<?php

namespace App\Http\Controllers;

use App\Models\Testimonial;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TestimonialController extends Controller
{
    public function index()
    {
        // Fetch all testimonials
        $testimonials = Testimonial::all();
        
        // Pass testimonial data to the frontend
        return Inertia::render('Welcome', [
            'testimonials' => $testimonials->map(function ($item) {
                return [
                    'id' => $item->id,
                    'quote' => $item->testimonial,
                    'name' => $item->name,
                    'role' => $item->title, // assuming title is the role
                ];
            }),
        ]);
    }
    
    
    // Update an existing testimonial
    public function update(Request $request, $id)
    {
        $testimonial = Testimonial::updateTestimonial($id, $request->only(['testimonial', 'name', 'title']));
        return response()->json($testimonial);
    }

    // Edit a testimonial (This will retrieve the testimonial by ID)
    public function edit($id)
    {
        $testimonial = Testimonial::findOrFail($id);
        return response()->json($testimonial);
    }

    // Delete a testimonial
    public function destroy($id)
    {
        $testimonial = Testimonial::deleteTestimonial($id);
        return response()->json(['message' => 'Testimonial deleted successfully', 'testimonial' => $testimonial]);
    }
}
