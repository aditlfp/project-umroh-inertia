<?php

namespace App\Http\Controllers;

use App\Http\Requests\MottoRequest;
use App\Http\Resources\MottoResource;
use App\Models\Hotel;
use App\Models\Motto;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class MottoController extends Controller
{

    // 'name',
    // 'desc',
    // 'hotel_id'
    public function index(Request $request)
    {
        $motto = DB::table('mottoes')->when($request->search, function ($query, $search){
            $query->where('name', 'LIKE', '%' . $search . '%');
        })->paginate(50);
        $moto =  MottoResource::collection($motto);

        return Inertia::render('Admin/Motto/MottoIndex', ['moto' => $moto]);
    }
    
    public function create()
    {
        $hotel = Hotel::all();
        return Inertia::render('Admin/Motto/MottoCreate', ['hotel' => $hotel]);
    }

    public function store(MottoRequest $request)
    {
        $moto = new Motto();

        $moto = [
            'name' => $request->name,
            'desc' => $request->desc,
            'hotel_id' => $request->hotel_id
        ];

        try {
            Motto::create($moto);
            return to_route('motto-section.index')->with(['message' => 'Motto Has Been Created!']);
        } catch (\Throwable $th) {
            Log::error($th);
            return redirect()->back()->with(['message' => 'Error Cannot Create Motto']);
        }
    }

    public function edit($id)
    {
        try {
            $motoId = Motto::findOrFail($id);
            return Inertia::render('Admin/Motto/MottoEdit', ['motoId' => $motoId]);
        } catch (\Throwable $th) {
            Log::error($th);
            return redirect()->back()->with(['message' => 'Error Motto Not Found']);
        }
    }

    public function update(Request $request, $id)
    {
        $moto = [
            'name' => $request->name,
            'desc' => $request->desc,
            'hotel_id' => $request->hotel_id
        ];

        try {
            $motoId = Motto::findOrFail($id);
            $motoId->update($moto);
            return to_route('motto-section.index')->with(['message' => 'Motto Has Been Update']);
        } catch (\Throwable $th) {
            Log::error($th);
            return redirect()->back()->with(['message' => 'Error Motto Fail To Update']);
        }
    }

    public function destroy($id)
    {
        try {
            $motoId = Motto::findOrFail($id);
            $motoData = $motoId->hotel_id;
            $hotelId = Hotel::findOrFail($motoData);

            $motoId->delete();
            $hotelId->delete();
            return redirect()->back()->with(['message' => 'Motto & Hotel Has Been Delete']);
        } catch (\Throwable $th) {
            Log::error($th);
            return redirect()->back()->with(['message' => 'Error Motto Fail To Delete']);
        }
    }
}
