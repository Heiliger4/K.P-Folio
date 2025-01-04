<?php
namespace App\Http\Controllers;

use App\Models\Home;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function update(Request $request, $id)
    {
        $home = Home::updateHome($id, $request->only(['name', 'profile_picture', 'home_description']));
        return response()->json($home);
    }
}
