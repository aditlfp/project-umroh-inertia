<?php

use App\Http\Controllers\FotoController;
use App\Http\Controllers\HeroController;
use App\Http\Controllers\HotelController;
use App\Http\Controllers\MottoController;
use App\Http\Controllers\PaketController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\TipsController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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
    return Inertia::render('Main');
});

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Admin Group&NameSpace
Route::prefix('admin')->group(function () {
   Route::resource('/galery', FotoController::class);
   Route::resource('/hero-section', HeroController::class);
   Route::resource('/hotel', HotelController::class);
   Route::resource('/motto-section', MottoController::class);
   Route::resource('/paket', PaketController::class);
   Route::resource('/role', RoleController::class);
   Route::resource('/tips', TipsController::class);
   Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
})->middleware(['auth', 'admin']);


require __DIR__.'/auth.php';
