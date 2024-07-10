<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EventController extends Controller
{
    public function show() {
        return Inertia::render('Events', [
            'events' => Event::where('show', 1)->get()
        ]);
    }
}
