<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Gallery;

class GalleryController extends Controller
{
    public function showFeatured()
    {
        $gallery = Gallery::where('featured', 1)->first();

        // Pass the featured gallery to the view
        return view('galleries.featured', ['gallery' => $gallery]);
    }
}

