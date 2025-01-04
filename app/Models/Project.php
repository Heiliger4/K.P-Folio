<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        'proji_picture', 
        'title', 
        'proji_description', 
        'proji_demo_link', 
        'proji_github_link'
    ];

    // Insert a new project
    public static function insertProject($data)
    {
        return self::create($data);
    }

    // Update an existing project
    public static function updateProject($id, $data)
    {
        $project = self::findOrFail($id);
        $project->update($data);
        return $project;
    }

    // Delete a project
    public static function deleteProject($id)
    {
        $project = self::findOrFail($id);
        $project->delete();
        return $project;
    }
}
