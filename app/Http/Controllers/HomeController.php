<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\Event;
use App\Models\Gallery;
use App\Models\News;
use App\Models\Partner;
use App\Models\PartnerStudio;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index() {
        // $heroSection = Gallery::where('name', 'hero_section')->first();

        // return view('home.home')
        //     ->with('heroSection', $heroSection)
        //     ->with('events', Event::where('show', 1)->get())
        //     ->with('partners', Partner::where('is_featured', 1)->get())
        //     ->with('partnerStudios', PartnerStudio::where('show', 1)->get());
        $heroSection = Gallery::where('name', 'hero_section')->first();
        $heroSection->load('images');
        return Inertia::render('Home/Home', [
            'carousel' => $heroSection,
            'events' => Event::where('show', 1)->get(),
            'news' => News::all(),
            'blogs' => Blog::all()
        ]);
    }
}
