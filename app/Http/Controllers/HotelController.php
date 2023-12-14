<?php

namespace App\Http\Controllers;

use App\Http\Requests\HotelRequest;
use App\Http\Resources\HotelResource;
use App\Models\Hotel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class HotelController extends Controller
{
    public function index()
    {
        $hotel = new HotelResource(Hotel::paginate(15));

        return Inertia::render('Admin/Hotel/HotelIndex', ['hotel' => $hotel]);
    }
    
    public function create()
    {
        return Inertia::render('Admin/Hotel/HotelCreate');

    }

    public function store(HotelRequest $request)
    {
        $hotel = new Hotel();
        $hotel = [
            'img' => $request->img,
        ];

        if($request->hasFile('img'))
        {
            $hotel['img'] = UploadImage($request, 'img');
        }

        try {
            Hotel::create($hotel);
            return to_route('hotel.index')->with(['message' => 'Hotel Has Been Created!']);
        } catch(\Illuminate\Database\QueryException $e){
           return redirect()->back()->with(['message' => 'Hotel Has Found!']);
        }
        
    }

    public function edit($id)
    {
        try {
            $hotelId = Hotel::findOrFail($id);
            if (!$hotelId) {
                return redirect()->back()->with(['message' => 'Hotel Not Found']);
            }
            return Inertia::render('Admin/Hotel/HotelsEdit', ['hotel' => $hotelId]);
        } catch (\Throwable $th) {
            Log::error($th);
            return redirect()->back()->with(['message' => 'Hotel Not Found']);
        }
    }

    public function update(Request $request, $id)
    {
        $hotel = [
            'img' => $request->img,
        ];

        if($request->hasFile('img'))
        {
            if($request->oldimage)
            {
                Storage::disk('public')->delete('images/' . $request->oldimage);
            }

            $hotel['img'] = UploadImage($request, 'img');
        }else{
            $hotel['img'] = $request->oldimage;
        }

        try {
            $hotelId = Hotel::findOrFail($id);
            if (!$hotelId) {
                return redirect()->back()->with(['message' => 'Hotel Not Found']);
            }
            $hotelId->update($hotel);
            return to_route('hotel.index')->with(['message' => 'Hotel Has Been Updated!']);
        } catch (\Throwable $th) {
            Log::error($th);
            return redirect()->back()->with(['message' => 'Hotel Not Found']);
        }
    }

    public function destroy($id)
    {
        try {
            $hotelId = Hotel::findOrFail($id);
            if (!$hotelId) {
                return redirect()->back()->with(['message' => 'Hotel Not Found']);
            }

            if ($hotelId->img == null) {
                return redirect()->back()->with(['message' => 'Image Hotel Not Found']);
            }
            
            if ($hotelId->img) {
                Storage::disk('public')->delete('images/'.$hotelId->img);
            }

            $hotelId->delete();
            return redirect()->back()->with(['message' => 'Hotel Has Been Delete!']);
        } catch (\Throwable $th) {
            Log::error($th);
            return redirect()->back()->with(['message' => 'Hotel Not Found']);
        }
    }
}
