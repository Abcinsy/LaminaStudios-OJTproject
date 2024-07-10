<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Creative extends Model
{
    use HasFactory;

    protected $casts = [
        'links' => 'array'
    ];
    
    protected $fillable = [
        'name',
        'title',
        'description',
        'blurb',
        'links',
        'image_name',
        'is_featured',
    ];
}
