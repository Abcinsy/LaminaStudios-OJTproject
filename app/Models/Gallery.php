<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Gallery extends Model
{
    use HasFactory;

    protected $fillable = [
        'name'
    ];

    public function images(): BelongsToMany
    {
        return $this->belongsToMany(Image::class, 'gallery_images');
    }
}
