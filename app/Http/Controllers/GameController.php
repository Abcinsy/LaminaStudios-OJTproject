<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class GameController extends Controller
{
    //
    public function index()
    {
        return Inertia::render('Games');
    }

    public function show()
    {
        return Inertia::render('Games');
    }
}
