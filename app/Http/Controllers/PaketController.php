<?php

namespace App\Http\Controllers;

use App\Http\Resources\PaketResource;
use App\Models\Paket;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class PaketController extends Controller
{
    public function index(Request $request)
    {
        $pakets = DB::table('pakets')->when($request->search, function ($query, $search){
            $query->where('name', 'LIKE', '%' . $search . '%');
        })->paginate(50);
        $paket =  PaketResource::collection($pakets);

        return Inertia::render('Admin/Paket/PaketIndex', ['paket' => $paket]);
    }
    
    public function create()
    {
        return Inertia::render('Admin/Paket/PaketCreate');
    }

    public function store(Request $request)
    {
        $paket = new Paket();
        $paket = [
            'name' => $request->name,
            'img' => $request->img
        ];

        if($request->hasFile('img'))
        {
            $paket['img'] = UploadImage($request, 'img');
        }

        try {
            Paket::create($paket);
            return to_route('paket.index')->with(['message' => 'Paket Has Been Created!']);
        } catch(\Illuminate\Database\QueryException $e){
           return redirect()->back()->with(['message' => 'Paket Has Found!']);
        }
        
    }

    public function edit($id)
    {
        try {
            $paketId = Paket::findOrFail($id);
            if (!$paketId) {
                return redirect()->back()->with(['message' => 'Paket Not Found']);
            }
            return Inertia::render('Admin/Paket/PaketEdit', ['paket' => $paketId]);
        } catch (\Throwable $th) {
            Log::error($th);
            return redirect()->back()->with(['message' => 'Paket Not Found']);
        }
    }

    public function update(Request $request, $id)
    {
        $paket = [
            'name' => $request->name,
            'img' => $request->img
        ];

        if($request->hasFile('img'))
        {
            if($request->oldimage)
            {
                Storage::disk('public')->delete('images/' . $request->oldimage);
            }

            $paket['img'] = UploadImage($request, 'img');
        }else{
            $paket['img'] = $request->oldimage;
        }

        try {
            $paketId = Paket::findOrFail($id);
            if (!$paketId) {
                return redirect()->back()->with(['message' => 'Paket Not Found']);
            }
            $paketId->update($paket);
            return redirect()->back()->with(['message' => 'Paket Has Been Updated!']);
        } catch (\Throwable $th) {
            Log::error($th);
            return redirect()->back()->with(['message' => 'Paket Not Found']);
        }
    }

    public function destroy($id)
    {
        try {
            $paketId = Paket::findOrFail($id);
            if (!$paketId) {
                return redirect()->back()->with(['message' => 'Paket Not Found']);
            }

            if ($paketId->img == null) {
                return redirect()->back()->with(['message' => 'Image Paket Not Found']);
            }
            if ($paketId->img) {
                Storage::disk('public')->delete('images/'.$paketId->img);
            }

            $paketId->delete();
            return redirect()->back()->with(['message' => 'Paket Has Been Delete!']);
        } catch (\Throwable $th) {
            Log::error($th);
            return redirect()->back()->with(['message' => 'Paket Not Found']);
        }
    }

}
