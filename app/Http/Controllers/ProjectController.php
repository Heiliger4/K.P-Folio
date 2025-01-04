<?php
namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    // Insert a new project
    public function store(Request $request)
    {
        $project = Project::insertProject($request->only([
            'proji_picture', 
            'title', 
            'proji_description', 
            'proji_demo_link', 
            'proji_github_link'
        ]));
        return response()->json($project, 201);
    }

    // Update an existing project
    public function update(Request $request, $id)
    {
        $project = Project::updateProject($id, $request->only([
            'proji_picture', 
            'title', 
            'proji_description', 
            'proji_demo_link', 
            'proji_github_link'
        ]));
        return response()->json($project);
    }

    // Delete a project
    public function destroy($id)
    {
        $project = Project::deleteProject($id);
        return response()->json(['message' => 'Project deleted successfully', 'project' => $project]);
    }
}
