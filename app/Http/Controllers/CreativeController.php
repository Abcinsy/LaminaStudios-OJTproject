<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Schema;
use App\Models\Creative;
use App\Models\Gallery;
use GuzzleHttp\Promise\Create;
use Illuminate\Http\UploadedFile;
use Inertia\Inertia;

class CreativeController extends Controller
{
    public function index() {
        // $featuredSection = Gallery::where('name', 'featured_creative')->first();
        // return view('creatives')
        //     ->with('creatives', Creative::all())
        //     ->with('featured_section', $featuredSection)
        //     ->with('featured_creative', Creative::where('is_featured', 1)->first());
        $featuredSection = Gallery::where('name', 'featured_creative')->first();
        $featuredSection->load('images');
        return Inertia::render('Creatives', [
            'creatives' => Creative::all(['id', 'name', 'title', 'image_name']),
            'featuredCreative' => Creative::where('is_featured', 1)->first(),
            'featuredGallery' => $featuredSection
        ]);
    }

    public function modal(Request $request, string $name) {
        return Creative::firstWhere('name', $name)->toJson();
    }

    public function form()
    {
        return view('creatives-form')->with('action', 'add');
    }

    public function getCreative(Request $request, string $name)
    {
        if ($creative = Creative::where('name', $name)->first()) {
            return view('creatives-details')->with('creative', $creative);
        } else {
            return abort(404);
        }
    }

    public function viewTable(Request $request)
    {
        if ($creatives = Creative::all()) {
            return view('admin.table')
            ->with('title', 'Creatives')
            ->with('records', $creatives)
            ->with('columns', Schema::getColumnListing('creatives'));
        }
    }

    public function addCreative(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'title' => 'required',
            'description' => 'required|max:1024',
            'image' => 'required|image|mimes:png,jpg,jpeg|max:2048'
        ]);

        $imageName = $this->uploadImage($request->image);

        Creative::create([
            'name' => $request->input('name'),
            'title' => $request->input('title'),
            'description' => $request->input('description'),
            'image_name' => $imageName,
        ]);

        // // Store in S3
        // $request->image->storeAs('images', $imageName, 's3');

        //Store IMage in DB 


        return redirect()->route('admin.table.creatives')->with('success', 'Creative added successfully!');
    }

    private function uploadImage(UploadedFile $image) {
        $imageName = time() . '.' . $image->extension();

        // Public Folder
        // $request->image->move(public_path('images'), $imageName);

        // Store in Storage Folder
        $image->storeAs('public/images', $imageName);

        return $imageName;
    }

    public function delete(Request $request) {
        Creative::destroy($request->input('id'));

        return redirect()->route('admin.table.creatives')->with('success', 'Creative deleted successfully!');
    }

    public function update(Request $request, string $id = null) {
        if($request->isMethod('get')) {
            return view('creatives-form')->with('creative', Creative::find($id))->with('action', 'update');
        }
        else if($request->isMethod('post')) {
            $request->validate([
                'id' => 'required|numeric',
                'name' => 'required',
                'title' => 'required',
                'description' => 'required|max:1024',
                'image' => 'nullable|image|mimes:png,jpg,jpeg|max:2048'
            ]);
            $creative = Creative::find($request->input('id'));
            $creative->name = $request->input('name');
            $creative->title = $request->input('title');
            $creative->description = $request->input('description');

            if($request->hasFile('image')) {
                $imageName = $this->uploadImage($request->image);
                $creative->image_name = $imageName;
            }

            $creative->save();

            return redirect()->route('admin.table.creatives')->with('success', 'Creative updated successfully!');
        }
    }
}
