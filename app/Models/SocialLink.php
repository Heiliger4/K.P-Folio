<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SocialLink extends Model
{
    use HasFactory;

    protected $fillable = [
        'github', 'linkedin', 'email', 'twitter', 'whatsapp', 'phone_number', 'hashnode'
    ];

    public static function updateSocialLinks($id, $data)
    {
        $socialLink = self::findOrFail($id);
        $socialLink->update($data);
        return $socialLink;
    }
}
