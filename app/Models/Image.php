<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Image extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'image_name'
    ];

    public function galleries(): BelongsToMany
    {
        return $this->belongsToMany(Gallery::class, 'gallery_images');
    }
}
