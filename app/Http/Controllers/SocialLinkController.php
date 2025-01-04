<?php
namespace App\Http\Controllers;

use App\Models\SocialLink;
use Illuminate\Http\Request;

class SocialLinkController extends Controller
{
    public function update($id, Request $request)
    {
        $validatedData = $request->validate([
            'github' => 'nullable|string|max:255',
            'linkedin' => 'nullable|string|max:255',
            'email' => 'nullable|string|max:255',
            'twitter' => 'nullable|string|max:255',
            'whatsapp' => 'nullable|string|max:255',
            'phone_number' => 'nullable|string|max:255',
            'hashnode' => 'nullable|string|max:255',
        ]);

        $socialLink = SocialLink::updateSocialLinks($id, $validatedData);

        return response()->json($socialLink);
    }
}
