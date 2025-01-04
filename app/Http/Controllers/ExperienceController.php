<?php
namespace App\Http\Controllers;

use App\Models\Experience;
use Illuminate\Http\Request;

class ExperienceController extends Controller
{
    // Update an existing experience
    public function update(Request $request, $id)
    {
        $experience = Experience::updateExperience($id, $request->only(['title', 'sub_title', 'years']));
        return response()->json($experience);
    }
}
