<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class JobApplication extends Model
{
    protected $fillable = [
        'job_offer_id',
        'user_id',
        'message',
        'resume_ref',
        'motivation_ref',
        'status',
    ];

    
    public function offer()
    {
        return $this->belongsTo(JobOffer::class, 'job_offer_id');
    }

    
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
