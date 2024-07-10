<?php

namespace App\Admin\Controllers;

use Encore\Admin\Controllers\AuthController as BaseAuthController;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AuthController extends BaseAuthController
{
    public function getLogin()
    {
        if ($this->guard()->check()) {
            return redirect($this->redirectPath());
        }

        return Inertia::render('Login', [
            'csrf_token' => csrf_token()
        ]);
    }

    public function postLogin(Request $request)
    {
        $this->loginValidator($request->all())->validate();

        $credentials = $request->only([$this->username(), 'password']);
        $remember = $request->get('remember', false);

        if ($this->guard()->attempt($credentials, $remember)) {
            return $this->sendLoginResponse($request);
        }

        return back()->withErrors([
            'error' => $this->getFailedLoginMessage(),
            'username' => $credentials['username'],
            'password' => $credentials['password'],
            'remember' => $remember
        ]);
    }
}
