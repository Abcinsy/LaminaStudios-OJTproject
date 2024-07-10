<?php

use Illuminate\Routing\Router;

Admin::routes();

Route::group([
    'prefix'        => config('admin.route.prefix'),
    'namespace'     => config('admin.route.namespace'),
    'middleware'    => config('admin.route.middleware'),
    'as'            => config('admin.route.prefix') . '.',
], function (Router $router) {

    $router->get('/', 'HomeController@index')->name('home');
    $router->resource('users', UserController::class);
    $router->resource('creatives', CreativeController::class);
    $router->resource('partners', PartnerController::class);
    $router->resource('galleries', GalleryController::class);
    $router->resource('images', ImageController::class);
    $router->resource('gallery-images', GalleryImageController::class);
    $router->resource('events', EventController::class);
    $router->resource('news', NewsController::class);
    $router->resource('blogs', BlogController::class);
    $router->resource('partner-studios', PartnerStudioController::class);
    $router->resource('games', GameController::class);
});
