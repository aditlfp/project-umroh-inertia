<?php

namespace App\Http\Controllers;

use App\Http\Requests\FotoRequest;
use App\Http\Resources\FotoResouce;
use App\Models\Foto;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class FotoController extends Controller
{
    public function index()
    {
        $fotos = DB::table('fotos')->paginate(15);
        $foto =  FotoResouce::collection($fotos);

        return Inertia::render('Admin/Foto/FotoIndex', ['foto' => $foto]);
    }
    
    public function create()
    {
        return Inertia::render('Admin/Foto/FotoCreate');

    }

    public function store(FotoRequest $request)
    {
        $foto = new Foto();
        $foto = [
            'img' => $request->img,
            'desc' => $request->desc
        ];

        if($request->hasFile('img'))
        {
            $foto['img'] = UploadImage($request, 'img');
        }

        try {
            Foto::create($foto);
            return to_route('galery.index')->with(['message' => 'Image Has Been Created!']);
        } catch(\Illuminate\Database\QueryException $e){
           return redirect()->back()->with(['message' => 'Foto Has Found!']);
        }
    }

    public function edit($id)
    {
        try {
            $fotoId = Foto::findOrFail($id);
            if (!$fotoId) {
                return redirect()->back()->with(['message' => 'Foto Not Found']);
            }
            return Inertia::render('Admin/Foto/FotoEdit', ['foto' => $fotoId]);
        } catch (\Throwable $th) {
            Log::error($th);
            return redirect()->back()->with(['message' => 'Foto Not Found']);
        }
    }

    public function update(Request $request, $id)
    {
        $foto = [
            'img' => $request->img,
            'desc' => $request->desc
        ];

        if($request->hasFile('img'))
        {
            if($request->oldimage)
            {
                Storage::disk('public')->delete('images/' . $request->oldimage);
            }

            $foto['img'] = UploadImage($request, 'img');
        }else{
            $foto['img'] = $request->oldimage;
        }

        try {
            $fotoId = Foto::findOrFail($id);
            if (!$fotoId) {
                return redirect()->back()->with(['message' => 'Foto Not Found']);
            }
            $fotoId->update($foto);
            return to_route('galery.index')->with(['message' => 'Foto Has Been Updated!']);
        } catch (\Throwable $th) {
            Log::error($th);
            return redirect()->back()->with(['message' => 'Foto Not Found']);
        }
    }

    public function destroy($id)
    {
        try {
            $fotoId = Foto::findOrFail($id);
            if (!$fotoId) {
                return redirect()->back()->with(['message' => 'Foto Not Found']);
            }

            if ($fotoId->img == null) {
                return redirect()->back()->with(['message' => 'Image Foto Not Found']);
            }
            if ($fotoId->img) {
                Storage::disk('public')->delete('images/'.$fotoId->img);
            }

            $fotoId->delete();
            return redirect()->back()->with(['message' => 'Foto Has Been Delete!']);
        } catch (\Throwable $th) {
            Log::error($th);
            return redirect()->back()->with(['message' => 'Foto Not Found']);
        }
    }
}
