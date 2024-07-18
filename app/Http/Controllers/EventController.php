<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class EventController extends Controller
{
    public function show()
    {
        try {
            // Fetch up to 3 events that should be shown
            $events = Event::where('show', 1)->take(3)->get();

            // Log raw events fetched from the database
            Log::info('Raw Events Fetched:', ['events' => $events->toArray()]);

            // Add image paths to each event
            foreach ($events as $event) {
                $event->image_name = asset('img/' . $event->image_name);
            }

            // Log processed events with image paths
            Log::info('Processed Events:', ['events' => $events->toArray()]);

            return Inertia::render('Events', [
                'events' => $events
            ]);
        } catch (\Exception $e) {
            // Log any errors
            Log::error('Error fetching events:', ['message' => $e->getMessage()]);

            // Return an empty array or handle error response
            return Inertia::render('Events', [
                'events' => []
            ]);
        }
    }
}
