<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Motto extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'desc',
        'hotel_id'
    ];

    public function Hotel()
    {
        return $this->belongsTo(Hotel::class);
    }
}
