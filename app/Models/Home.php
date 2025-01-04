<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Home extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'profile_picture', 'home_description'];

    public static function updateHome($id, $data)
    {
        $home = self::findOrFail($id);
        $home->update($data);
        return $home;
    }
}
