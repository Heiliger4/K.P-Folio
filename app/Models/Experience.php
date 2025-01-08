<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Experience extends Model
{
    use HasFactory;

    protected $table = 'experiences';
    
    protected $fillable = [
        'title',
        'sub_title',
        'years',
    ];

    public function getStartYearAttribute()
    {
        return explode('-', $this->years)[0] ?? '';
    }

    public function getEndYearAttribute()
    {
        return explode('-', $this->years)[1] ?? '';
    }

    // Update an existing experience
    public static function updateExperience($id, $data)
    {
        $experience = self::findOrFail($id);
        $experience->update($data);
        return $experience;
    }
}
