<?php
namespace App\Http\Controllers;

use App\Models\About;
use Illuminate\Http\Request;

class AboutController extends Controller
{
    public function update(Request $request, $id)
    {
        $about = About::updateAbout($id, $request->only(['about_description']));
        return response()->json($about);
    }
}
