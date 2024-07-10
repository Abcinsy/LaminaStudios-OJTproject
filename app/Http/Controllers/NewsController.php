<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\News;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NewsController extends Controller
{
    // public function show(Request $request, string $id)
    public function index()
    {
        return Inertia::render('News',[
            'news' => News::all(),
            'blogs' => Blog::all()
        ]);
    }

    public function show(Request $request, $id)
    {
        if($article = News::where('id', $id)->first()) {
            $article->load('author');

            return Inertia::render('Article', [
                'type' => 'blog',
                'article' => $article,
                'otherNews' => News::select('id', 'title', 'image_name')->take(5)->get()
            ]);
        }
        else {
            return abort(404);
        }
    }
}
