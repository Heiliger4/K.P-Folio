<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TechStack extends Model
{
    use HasFactory;

    protected $fillable = ['project_id', 'tech_name'];

    public static function updateTechStack($id, $data)
    {
        $techStack = self::findOrFail($id);
        $techStack->update($data);
        return $techStack;
    }
}