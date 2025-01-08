<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Home extends Model
{
    // Define the table name (optional if it matches the model name in plural)
    protected $table = 'homes';

    // Define the fillable fields for mass assignment
    protected $fillable = [
        'name',
        'profile_picture',
        'home_description',
    ];

    // Accessors for splitting the name into first name and last name
    public function getFirstNameAttribute()
    {
        return explode(' ', $this->name)[0] ?? '';
    }

    public function getLastNameAttribute()
    {
        return explode(' ', $this->name)[1] ?? '';
    }
}






















