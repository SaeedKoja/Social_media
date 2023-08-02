<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\SocialMedia;

class Comment extends Model
{
    use HasFactory;
    protected $fillable = [
        'IdSm',
        'TeSmCom',
        'Name',
        'nameUser'
    ];

    public function SocialMedia()
    {
        return $this->belongsTo(SocialMedia::class);
    }
}
