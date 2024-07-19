<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Auth\Events\Registered;
use App\Http\Requests\RegisterRequest;
use Inertia\Inertia;

class RegisterController extends Controller
{
    public function show()
    {
        // Render the Inertia component for registration
        return Inertia::render('Register');
    }

    public function register(RegisterRequest $request) {
        $user = User::create($request->validated());
        
        event(new Registered($user));
        auth()->login($user);

        return redirect('/email/verify')->with('success', "Account successfully registered.");
    }
}
