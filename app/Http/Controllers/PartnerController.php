<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Schema;
use App\Models\Partner;
use Illuminate\Http\UploadedFile;

class PartnerController extends Controller
{
    public function form() {
        return view('partners-form')->with('action', 'add');
    }

    public function viewTable(Request $request)
    {
        if ($partners = Partner::all()) {
            return view('admin.table')
            ->with('title', 'Partners')
            ->with('records', $partners)
            ->with('columns', Schema::getColumnListing('partners'));
        }
    }

    public function addPartner(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'image' => 'required|image|mimes:png,jpg,jpeg|max:2048'
        ]);

        $imageName = $this->uploadImage($request->image);

        Partner::create([
            'name' => $request->input('name'),
            'image_name' => $imageName,
        ]);

        return redirect()->route('admin.table.partners')->with('success', 'Partner added successfully!');
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
        Partner::destroy($request->input('id'));

        return redirect()->route('admin.table.partners')->with('success', 'Partner deleted successfully!');
    }

    public function update(Request $request, string $id = null) {
        if($request->isMethod('get')) {
            return view('partners-form')->with('partner', Partner::find($id))->with('action', 'update');
        }
        else if($request->isMethod('post')) {
            $request->validate([
                'id' => 'required|numeric',
                'name' => 'required',
                'image' => 'nullable|image|mimes:png,jpg,jpeg|max:2048'
            ]);
            $partner = Partner::find($request->input('id'));
            $partner->name = $request->input('name');

            if($request->hasFile('image')) {
                $imageName = $this->uploadImage($request->image);
                $partner->image_name = $imageName;
            }

            $partner->save();

            return redirect()->route('admin.table.partners')->with('success', 'Partner updated successfully!');
        }
    }
}
