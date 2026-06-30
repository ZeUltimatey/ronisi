<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EventRegistration extends Model
{
    use HasFactory;

    protected $fillable = [
        'name','email','phone','team_name','organization','sports','participants_count','notes','ip_address','user_agent'
    ];

    protected $casts = [
        'sports' => 'array',
    ];
}
