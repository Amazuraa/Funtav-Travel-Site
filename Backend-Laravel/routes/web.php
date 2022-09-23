<?php

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->group(['prefix'=>'api/public'], function() use($router){
    $router->post('/login', 'AuthController@login');
    $router->post('/register', 'UsersController@register');
    
    // --- Tours ---
    $router->get('/tour', 'ToursController@getTour');
    $router->post('/tour/search', 'ToursController@searchTour');

    // --- Custom Tour Request ---
    $router->post('/req', 'ToursReqController@addRequest');
    $router->get('/req/user/{id}', 'ToursReqController@getRequestId');
});

$router->group(['prefix'=>'api/admin'], function() use($router){
    $router->post('/register', 'AdminController@register');
    
    // --- Tours ---
    $router->get('/tour', 'ToursController@getTourAll');
    $router->get('/tour/{id}', 'ToursController@getTourId');
    $router->post('/tour/add', 'ToursController@addTour');
    $router->post('/tour/add/custom', 'ToursController@addTourCustom');
    $router->put('/tour/update/{id}', 'ToursController@updateTour');
    $router->put('/tour/update/departure/{id}', 'ToursController@updateTourDeparture');
    $router->put('/tour/update/stat/{id}', 'ToursController@updateTourStat');
    $router->delete('/tour/delete/{id}', 'ToursController@deleteTour');

    // --- Custom Tour Request ---
    $router->get('/req', 'ToursReqController@getRequest');
    $router->put('/req/{id}', 'ToursReqController@updateRequest');
});