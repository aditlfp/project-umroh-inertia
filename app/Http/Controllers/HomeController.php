<?php

namespace App\Http\Controllers;

use App\Http\Resources\FotoResouce;
use App\Http\Resources\HeroResource;
use App\Http\Resources\HotelResource;
use App\Http\Resources\MottoResource;
use App\Http\Resources\PaketResource;
use App\Http\Resources\TipsResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Hero
        $heros = DB::table('heroes')->paginate(15);
        $hero = HeroResource::collection($heros);
        // End Hero 
        // Galery
        $fotos = DB::table('fotos')->paginate(15);
        $foto =  FotoResouce::collection($fotos);
        // End Galery
        // Hotel
        $hotels = DB::table('hotels')->paginate(50);
        $hotel =  HotelResource::collection($hotels);
        // Hotel
        // Motto
        $motto = DB::table('mottoes')->get();
        $moto =  MottoResource::collection($motto);
        // Motto
        // Paket
        $pakets = DB::table('pakets')->paginate(50);
        $paket =  PaketResource::collection($pakets);
        // Paket
        // Tips
        $tip = DB::table('tips')->paginate(15);
        $tips = TipsResource::collection($tip);
        // End tips

        return Inertia::render('Main', compact('hero', 'foto', 'hotel', 'moto', 'paket', 'tips'));
    }
}
