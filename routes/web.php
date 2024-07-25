<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Auth;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('index');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('admin/home', [HomeController::class, 'adminHome'])->name('admin.home')->middleware('is_admin');

// Route::group(['namespace' => 'Admin', 'middleware' => 'antihack'], function () {
//         Route::get('adminlogon', 'Auth\LoginController@showLoginForm')->name('admin.login');
//     Route::post('adminlogon', 'Auth\LoginController@login');

//     Route::group(['middleware' => 'auth:admin'], function () {
//     });

// });
