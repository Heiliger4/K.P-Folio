<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Testimonial extends Model
{
    use HasFactory;

    protected $fillable = [
        'testimonial',
        'name',
        'title',
    ];

    // Update an existing testimonial
    public static function updateTestimonial($id, $data)
    {
        $testimonial = self::findOrFail($id);
        $testimonial->update($data);
        return $testimonial;
    }

    // Delete a testimonial
    public static function deleteTestimonial($id)
    {
        $testimonial = self::findOrFail($id);
        $testimonial->delete();
        return $testimonial;
    }
}
