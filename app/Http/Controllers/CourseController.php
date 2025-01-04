<?php
namespace App\Http\Controllers;

use App\Models\Course;
use Illuminate\Http\Request;

class CourseController extends Controller
{
    // Insert a new course
    public function store(Request $request)
    {
        $course = Course::insertCourse($request->only(['cert_picture', 'view_link']));
        return response()->json($course, 201);
    }

    // Update an existing course
    public function update(Request $request, $id)
    {
        $course = Course::updateCourse($id, $request->only(['cert_picture', 'view_link']));
        return response()->json($course);
    }

    // Delete a course
    public function destroy($id)
    {
        $course = Course::deleteCourse($id);
        return response()->json(['message' => 'Course deleted successfully', 'course' => $course]);
    }
}
