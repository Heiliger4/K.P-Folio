<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class About extends Model
{
    use HasFactory;

    protected $fillable = ['about_description'];

    public static function updateAbout($id, $data)
    {
        $about = self::findOrFail($id);
        $about->update($data);
        return $about;
    }
}
