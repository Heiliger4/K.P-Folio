<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Skill extends Model
{
    use HasFactory;

    protected $fillable = ['react_icon_link', 'icon_title'];

    // Method to insert a new skill
    public static function insertSkill($data)
    {
        return self::create($data);
    }

    // Method to update an existing skill
    public static function updateSkill($id, $data)
    {
        $skill = self::findOrFail($id);
        $skill->update($data);
        return $skill;
    }

    // Method to delete a skill
    public static function deleteSkill($id)
    {
        $skill = self::findOrFail($id);
        $skill->delete();
        return $skill;
    }
}

