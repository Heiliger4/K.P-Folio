<?php
namespace App\Http\Controllers;

use App\Models\SocialLink;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SocialLinkController extends Controller
{
    public function index()
    {
        // Fetch all social links
        $socialLinks = SocialLink::all()->map(function ($item) {
            return [
                'github' => $item->github,
                'linkedin' => $item->linkedin,
                'email' => $item->email,
                'twitter' => $item->twitter,
                'whatsapp' => $item->whatsapp,
                // 'phone_number' => $item->phone_number,
                // 'hashnode' => $item->hashnode,
            ];
        });
    
        return [
            'socialLinks' => $socialLinks,
        ];
    }
    
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
