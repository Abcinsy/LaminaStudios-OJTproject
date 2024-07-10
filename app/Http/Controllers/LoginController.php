<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\LoginRequest;
use Illuminate\Support\Facades\Auth;
use App\Models\UserLog;
use Inertia\Inertia;

class LoginController extends Controller
{
    public function show() {
        // return view('auth.login');
        return Inertia::render('Login');
    }

    public function login(LoginRequest $request) {
        $credentials = $request->getCredentials();

        if(!Auth::validate($credentials)):
            return redirect()->to('login')
                ->withErrors(trans('auth.failed'));
        endif;

        $user = Auth::getProvider()->retrieveByCredentials($credentials);

        Auth::login($user);

        UserLog::create([
            'user_id' => $user->id,
            'action_taken' => 'User \'' . $user->username . '\' logged in.',
            'ip_address' => $request->ip()
        ]);

        return $this->authenticated($request, $user);
    }

    protected function authenticated(Request $request, $user) {
        return redirect()->intended();
    }
}
