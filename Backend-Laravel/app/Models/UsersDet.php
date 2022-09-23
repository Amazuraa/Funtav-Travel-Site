<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UsersDet extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'name',
        'departures'
    ];

    protected $hidden = [
        'phone',
        'address'
    ];
}
