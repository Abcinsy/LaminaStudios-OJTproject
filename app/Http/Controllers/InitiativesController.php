<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class InitiativesController extends Controller
{
    public function show()
    {


    return Inertia::render('Initiatives/Index');
    }
}
