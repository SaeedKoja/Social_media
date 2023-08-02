<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Comment;
use App\Models\User;

class SocialMedia extends Model
{
    use HasFactory;
    protected $fillable = [
        'Name',
        'TeSm',
        'AttSm',
        'nameUser'

    ];
    public function comments()
    {
        return $this->hasMany(Comment::class);
    }

    public function users()
    {
        return $this->belongsTo(User::class);
    }
}
