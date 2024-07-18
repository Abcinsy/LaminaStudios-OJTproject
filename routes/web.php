<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Inertia\Inertia;
use App\Http\Controllers\EventController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/partners', function () {
    return view('partners');
})->name('partners');

Route::middleware(['auth'])->group(function () {
    Route::middleware('notVerified')->get('/email/verify', function () {
        return view('auth.verify-email');
    })->name('verification.notice');

    Route::middleware('signed')->get('/email/verify/{id}/{hash}', function (EmailVerificationRequest $request) {
        $request->fulfill();
        return redirect('/');
    })->name('verification.verify');

    Route::post('/email/verification-notification', function (Request $request) {
        $request->user()->sendEmailVerificationNotification();
        return back()->with('message', 'Verification link sent!');
    })->middleware('throttle:6,1')->name('verification.send');
});

Route::group(['namespace' => 'App\Http\Controllers'], function () {
    // diretso sa route na render
    // Route::get('/about', function () {
    //     return Inertia::render('About', [
    //         'data' => 'whatever data'
    //     ]);
    // });

    /**
     * Home Routes
     */
    Route::inertia('/', 'Welcome')->name('welcome');
    Route::get('/home', 'HomeController@index')->name('home');
    Route::get('/games', 'GameController@index')->name('games');
    Route::inertia('/about-us', 'AboutUs/AboutUs');
    Route::inertia('/contact-us', 'Contact')->name('contact-us');
    Route::inertia('/internship', 'Internship/Internship');
    Route::post('/contact-us', 'MessageController@store');
    Route::inertia('/games/dungeonsouls', 'Games/DungeonSouls');
    Route::inertia('/games/badbotsrise', 'Games/BadBotsRise');
    Route::inertia('/games/journeytovalhalla', 'Games/JourneyToValhalla');
    Route::get('/contact', 'ContactController@index')->name('contact');
    Route::get('/creatives', 'CreativeController@index')->name('creatives');
    Route::get('/creatives/c/{name}', 'CreativeController@getCreative')->where('name', '[A-Za-z]+');

    Route::get('/news/{id}', 'NewsController@show')->whereNumber('id');
    Route::get('/news', 'NewsController@index')->name('news');
    Route::get('/initiatives', 'InitiativesController@show')->name('Initiatives.show');
    //Route::get('/events', 'EventController@show')->name('events.show');
    Route::get('/blog/{id}', 'BlogController@show')->whereNumber('id');
    Route::get('/events', [EventController::class, 'show']);

    Route::get('/login', function () {
        return Inertia::render('Login', [
            'csrf_token' => csrf_token(),
            'errors' => session('errors', new \Illuminate\Support\MessageBag()),
        ]);
    });

    Route::post('/admin/auth/login', [AuthController::class, 'login']);

    Route::get('/register', function () {
        return Inertia::render('Register', [
            'csrf_token' => csrf_token(),
            'errors' => session('errors', new \Illuminate\Support\MessageBag()),
        ]);
    });

    Route::post('/register', [AuthController::class, 'register']);

    Route::get('/application-form', function () {
        return Inertia::render('Internship/ApplicationForm');
    })->name('application.form');

    Route::post('/application-form', function (Request $request) {
        // Process the form submission here
        return redirect()->back()->with('success', 'Application submitted successfully!');
    })->name('application.form.submit');

    Route::get('/admin/dashboard', function () {
        return Inertia::render('Admin/AdminDashboard');
    })->name('admin.dashboard');

    Route::group(['middleware' => ['auth']], function () {
        /**
         * Logout Routes
         */
        Route::get('/logout', 'LogoutController@perform')->name('logout.perform');
    });
});
