<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\Event;
use App\Models\News;
use Illuminate\Support\Facades\File;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        try {
            // Fetch images from the public/art directory
            $imageFiles = File::files(public_path('art'));
            $carousel = [
                'images' => []
            ];

            // Select only 5 images
            $selectedImages = array_slice($imageFiles, 0, 5);

            // Add selected images to the carousel array
            foreach ($selectedImages as $file) {
                $carousel['images'][] = ['image_name' => asset('art/' . $file->getFilename())];
            }

            // Fetch events, news, and blogs data
            $events = Event::where('show', 1)->get();
            $news = News::all();
            $blogs = Blog::all();

            return Inertia::render('Home/Home', [
                'carousel' => $carousel,
                'events' => $events,
                'news' => $news,
                'blogs' => $blogs,
                'errors' => []
            ]);
        } catch (\Exception $e) {
            // Display the error
            dd($e->getMessage());
        }
    }
}
