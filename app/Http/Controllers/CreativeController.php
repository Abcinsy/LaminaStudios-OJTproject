<?php

namespace App\Http\Controllers;

use App\Models\Creative;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use App\Models\Gallery;
use Inertia\Inertia;

class CreativeController extends Controller
{
    public function index()
        {
            $featuredCreative = Creative::where('featured', true)->first();
            $featuredGallery = Gallery::with('images')->where('featured', true)->first();

            return Inertia::render('Creatives', [
                'creatives' => Creative::all(),
                'featuredCreative' => $featuredCreative,
                'featuredGallery' => $featuredGallery,
            ]);
        }

    public function updateImage($id, Request $request)
    {
        try {
            $creative = Creative::findOrFail($id);

            if ($request->hasFile('image')) {
                $file = $request->file('image');
                $path = $file->store('images', 'public');

                $creative->image_name = $path;
            } else if ($request->has('image_path')) {
                $creative->image_name = $request->input('image_path');
            } else {
                return response()->json(['error' => 'No image provided'], 400);
            }

            $creative->save();

            return response()->json(['success' => 'Image updated successfully', 'image_path' => $creative->image_name], 200);
        } catch (ModelNotFoundException $e) {
            return response()->json(['error' => 'Creative not found'], 404);
        }
    }
}
