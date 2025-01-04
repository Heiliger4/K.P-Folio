<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;

    protected $fillable = [
        'cert_picture',
        'view_link'
    ];

    // Insert a new course
    public static function insertCourse($data)
    {
        return self::create($data);
    }

    // Update an existing course
    public static function updateCourse($id, $data)
    {
        $course = self::findOrFail($id);
        $course->update($data);
        return $course;
    }

    // Delete a course
    public static function deleteCourse($id)
    {
        $course = self::findOrFail($id);
        $course->delete();
        return $course;
    }
}

