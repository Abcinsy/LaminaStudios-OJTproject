<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\Event;
use App\Models\Gallery;
use App\Models\News;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $heroSection = Gallery::where('name', 'hero_section')->first();
        if ($heroSection) {
            $heroSection->load('images');
        }

        return Inertia::render('Home/Home', [
            'carousel' => $heroSection,
            'events' => Event::where('show', 1)->get(),
            'news' => News::all(),
            'blogs' => Blog::all(),
            'errors' => [
                'heroSection' => $heroSection ? null : 'Hero section not found'
            ],
        ]);
    }
}
