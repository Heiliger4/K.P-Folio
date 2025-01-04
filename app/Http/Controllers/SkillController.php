<?php
namespace App\Http\Controllers;

use App\Models\Skill;
use Illuminate\Http\Request;

class SkillController extends Controller
{
    // Insert a new skill
    public function store(Request $request)
    {
        $skill = Skill::insertSkill($request->only(['react_icon_link', 'icon_title']));
        return response()->json($skill, 201);
    }

    // Update an existing skill
    public function update(Request $request, $id)
    {
        $skill = Skill::updateSkill($id, $request->only(['react_icon_link', 'icon_title']));
        return response()->json($skill);
    }

    // Delete a skill
    public function destroy($id)
    {
        $skill = Skill::deleteSkill($id);
        return response()->json(['message' => 'Skill deleted successfully', 'skill' => $skill]);
    }
}
