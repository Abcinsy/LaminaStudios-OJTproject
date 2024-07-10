<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use App\Models\UserLog;

class LogoutController extends Controller
{
    public function perform(Request $request) {
        Session::flush();

        $user = Auth::user();
        
        Auth::logout();

        UserLog::create([
            'user_id' => $user->id,
            'action_taken' => 'User \'' . $user->username . '\' logged out.',
            'ip_address' => $request->ip()
        ]);

        return redirect('/');
    }
}
