<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Encore\Admin\Auth\Database\Administrator as EncoreAdministrator;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Administrator extends EncoreAdministrator
{
    use HasFactory;
    
    protected $table = 'admin_users';

    protected $hidden = [
        'password',
        'remember_token',
    ];

    public function articles(): HasMany
    {
        return $this->hasMany(News::class, 'author_id');
    }

    public function blogs(): HasMany
    {
        return $this->hasMany(Blog::class, 'author_id');
    }
}
