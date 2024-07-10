<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BlogController extends Controller
{
    public function show(Request $request, string $id)
    {
        if($blog = Blog::where('id', $id)->first()) {
            $blog->load('author');

            return Inertia::render('Article', [
                'type' => 'blog',
                'article' => $blog,
                'otherNews' => Blog::select('id', 'title', 'image_name')->take(5)->get()
            ]);
        }
        else {
            return abort(404);
        }
    }
}
