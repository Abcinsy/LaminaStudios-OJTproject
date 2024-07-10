<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Game extends Model
{
    use HasFactory;

    protected $fillable = [
        'partner_studio_id',
        'name',
        'blurb',
        'description',
        'link',
        'image_name'
    ];

    public function partner_studio(): BelongsTo
    {
        return $this->belongsTo(PartnerStudio::class);
    }
}
