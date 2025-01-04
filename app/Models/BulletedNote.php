<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BulletedNote extends Model
{
    use HasFactory;

    protected $fillable = ['experience_id', 'note'];

    public static function updateBulletedNote($id, $data)
    {
        $bulletedNote = self::findOrFail($id);
        $bulletedNote->update($data);
        return $bulletedNote;
    }
}
