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
        $featuredCreative = Creative::where('is_featured', true)->first();
        $creatives = Creative::all()->map(function($creative) {
            $creative->image_name = '/art/06.png'; // Update this path as necessary
            return $creative;
        });

        if ($featuredCreative) {
            $featuredCreative->image_name = '/artist/pfp_artist.jpg'; // Update this path as necessary
        }

        return Inertia::render('Creatives', [
            'creatives' => $creatives,
            'featuredCreative' => $featuredCreative,
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
