<?php

namespace App\Http\Controllers;

use App\Models\Testimonial;
use Illuminate\Http\Request;

class TestimonialController extends Controller
{
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
