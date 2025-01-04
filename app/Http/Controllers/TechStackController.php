<?php
namespace App\Http\Controllers;

use App\Models\TechStack;
use Illuminate\Http\Request;

class TechStackController extends Controller
{
    public function update($id, Request $request)
    {
        $validatedData = $request->validate([
            'project_id' => 'required|exists:projects,id',
            'tech_name' => 'required|string|max:255',
        ]);

        $techStack = TechStack::updateTechStack($id, $validatedData);

        return response()->json($techStack);
    }
}
