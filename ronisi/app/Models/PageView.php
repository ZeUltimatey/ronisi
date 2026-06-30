<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PageView extends Model
{
    public $timestamps = false;

    protected $fillable = ['path','ip_hash','user_agent','referer','viewed_at'];

    protected $casts = ['viewed_at' => 'datetime'];
}
