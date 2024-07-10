<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class News extends Model
{
    use HasFactory;

    protected $fillable = [
        'slug',
        'title',
        'article',
        'image_name',
        'admin_user_id'
    ];

    public function author(): BelongsTo
    {
        return $this->belongsTo(Administrator::class);
    }
}
