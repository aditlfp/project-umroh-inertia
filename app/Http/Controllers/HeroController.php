<?php

namespace App\Http\Controllers;

use App\Http\Requests\HeroRequest;
use App\Http\Resources\HeroResource;
use App\Models\Hero;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class HeroController extends Controller
{

    // 'title' => ['required'],
    // 'bulan' => ['required'],
    // 'tahun' => ['required'],
    // 'sub_title' => ['required'],
    // 'img' => ['required', 'mimes:png,jpg,jpeg', 'max:3072'], 
    public function index(Request $request)
    {
        $hero = new HeroResource(Hero::when($request->search, function ($query, $search){
            $query->where('title', 'LIKE', '%' . $search . '%');
        })->paginate(15));

        return Inertia::render('Admin/Hero/HeroIndex', ['hero' => $hero]);
    }
    
    public function create()
    {
        return Inertia::render('Admin/Hero/HeroCreate');
    }

    public function store(HeroRequest $request)
    {
        $hero = new Hero();

        $hero = [
            'title' => $request->title,
            'month' => $request->month,
            'year' => $request->year,
            'sub_title' => $request->sub_title,
            'img' => $request->img
        ];

        if($request->hasFile('img'))
        {
            $hero['img'] = UploadImage($request, 'img');
        }

        try {
            Hero::create($hero);
            return to_route('hero-section.index')->with(['message' => 'Hero Section Has Been Created!']);
        } catch(\Illuminate\Database\QueryException $e){
           return redirect()->back()->with(['message' => 'Foto Has Found!']);
        }
        
    }

    public function edit($id)
    {
        try {
            $heroId = Hero::findOrFail($id);
            if (!$heroId) {
                return redirect()->back()->with(['message' => 'Hero Section Not Found']);
            }
            return Inertia::render('Admin/Hero/HeroEdit', ['hero' => $heroId]);
        } catch (\Throwable $th) {
            Log::error($th);
            return redirect()->back()->with(['message' => 'Hero Section Found']);
        }
    }

    public function update(Request $request, $id)
    {
        $hero = [
            'title' => $request->title,
            'month' => $request->month,
            'year' => $request->year,
            'sub_title' => $request->sub_title,
            'img' => $request->img
        ];

        if($request->hasFile('img'))
        {
            if($request->oldimage)
            {
                Storage::disk('public')->delete('images/' . $request->oldimage);
            }

            $hero['img'] = UploadImage($request, 'img');
        }else{
            $hero['img'] = $request->oldimage;
        }

        try {
            $heroId = Hero::findOrFail($id);
            if (!$heroId) {
                return redirect()->back()->with(['message' => 'Hero Section Not Found']);
            }
            $heroId->update($hero);
            return to_route('hero-section.index')->with(['message' => 'Hero Section Has Been Updated!']);
        } catch (\Throwable $th) {
            Log::error($th);
            return redirect()->back()->with(['message' => 'Hero Section Not Found']);
        }
    }

    public function destroy($id)
    {
        try {
            $heroId = Hero::findOrFail($id);
            if (!$heroId) {
                return redirect()->back()->with(['message' => 'Hero Section Not Found']);
            }

            if ($heroId->img == null) {
                return redirect()->back()->with(['message' => 'Image Foto Not Found']);
            }
            if ($heroId->img) {
                Storage::disk('public')->delete('images/'.$heroId->img);
            }

            $heroId->delete();
            return redirect()->back()->with(['message' => 'Hero Section Has Been Delete!']);
        } catch (\Throwable $th) {
            Log::error($th);
            return redirect()->back()->with(['message' => 'Hero Section Not Found']);
        }
    }
}
