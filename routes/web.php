<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Inertia\Inertia;

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

// Route::get('/', function () {
//     return view('home.home');
// })->name('home');

Route::get('/partners', function () {
    return view('partners');
})->name('partners');

Route::get('/email/verify', function () {
    return view('auth.verify-email');
})->middleware(['auth', 'notVerified'])->name('verification.notice');

Route::get('/email/verify/{id}/{hash}', function (EmailVerificationRequest $request) {
    $request->fulfill();

    return redirect('/');
})->middleware(['auth', 'signed'])->name('verification.verify');

Route::post('/email/verification-notification', function (Request $request) {
    $request->user()->sendEmailVerificationNotification();

    return back()->with('message', 'Verification link sent!');
})->middleware(['auth', 'throttle:6,1'])->name('verification.send');

Route::group(['namespace' => 'App\Http\Controllers'], function()
{
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
    Route::get('/creatives/c/{name}', 'CreativeController@getCreative')->where('name', '[A-Za-z]+');;

    Route::get('/news/{id}', 'NewsController@show')->whereNumber('id');
    Route::get('/news', 'NewsController@index')->name('news');
    Route::get('/initiatives', 'InitiativesController@show')->name('Initiatives.show');
    Route::get('/events', 'EventController@show')->name('events.show');
    Route::get('/blog/{id}', 'BlogController@show')->whereNumber('id');

    Route::group(['middleware' => ['guest']], function () {
        /**
         * Register Routes
         */
        Route::get('/register', 'RegisterController@show')->name('register.show');
        Route::post('/register', 'RegisterController@register')->name('register.perform');

        /**
         * Login Routes
         */
        Route::get('/login', 'LoginController@show')->name('login.show');
        Route::post('/login', 'LoginController@login')->name('login.perform');
    });

    Route::group(['middleware' => ['auth']], function () {
        /**
         * Logout Routes
         */
        Route::get('/logout', 'LogoutController@perform')->name('logout.perform');
        // Route::get('/admin/creatives/add', 'CreativeController@form')->name('admin.creatives.form');
        // Route::post('/admin/creatives/add', 'CreativeController@addCreative')->name('admin.creatives.add');
        // Route::get('/admin/creatives/{id}', 'CreativeController@update')->name('admin.creatives.edit');
        // Route::post('/admin/creatives/update', 'CreativeController@update')->name('admin.creatives.update');
        // Route::post('/admin/creatives/delete', 'CreativeController@delete')->name('admin.creatives.delete');

        // Route::get('/admin/partners/add', 'PartnerController@index')->name('admin.partners.form');
        // Route::post('/admin/partners/add', 'PartnerController@addPartner')->name('admin.partners.add');
        // Route::get('/admin/partners/{id}', 'PartnerController@update')->name('admin.partners.edit');
        // Route::post('/admin/partners/update', 'PartnerController@update')->name('admin.partners.update');
        // Route::post('/admin/partners/delete', 'PartnerController@delete')->name('admin.partners.delete');

        // Route::get('/admin', function () {
        //     return view('admin.home');
        // })->name('admin.home');

        // Route::get('/admin/creatives', 'CreativeController@viewTable')->name('admin.table.creatives');
        // Route::get('/admin/partners', 'PartnerController@viewTable')->name('admin.table.partners');
    });
});
