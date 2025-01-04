<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Experience extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'sub_title',
        'years',
    ];

    // Update an existing experience
    public static function updateExperience($id, $data)
    {
        $experience = self::findOrFail($id);
        $experience->update($data);
        return $experience;
    }
}
