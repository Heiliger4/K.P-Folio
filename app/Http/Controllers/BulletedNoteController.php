<?php
namespace App\Http\Controllers;

use App\Models\BulletedNote;
use Illuminate\Http\Request;

class BulletedNoteController extends Controller
{
    public function update($id, Request $request)
    {
        $validatedData = $request->validate([
            'experience_id' => 'required|exists:experiences,id',
            'note' => 'required|string',
        ]);

        $bulletedNote = BulletedNote::updateBulletedNote($id, $validatedData);

        return response()->json($bulletedNote);
    }
}
