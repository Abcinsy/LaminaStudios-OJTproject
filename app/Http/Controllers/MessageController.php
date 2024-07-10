<?php

namespace App\Http\Controllers;

use App\Models\Message;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class MessageController extends Controller
{
    //
    public function store(Request $request)
    {
        Message::create($request->validate([
            'name' => ['required', 'max:50'],
            'email' => ['required', 'max:50', 'email'],
            'inquiry' => ['required', Rule::in(['bug', 'business', 'other'])],
            'content' => ['required', 'max:512']
        ]));

        return to_route('contact-us');
    }
}
