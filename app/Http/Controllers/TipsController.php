<?php

namespace App\Http\Controllers;

use App\Http\Requests\TipsRequest;
use App\Http\Resources\TipsResource;
use App\Models\Tips;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class TipsController extends Controller
{
    public function index()
    {
        $tip = DB::table('tips')->paginate(15);
        $tips = TipsResource::collection($tip);

        return Inertia::render('Admin/Tips/TipsIndex', ['tips' => $tips]);
    }
    
    public function create()
    {
        return Inertia::render('Admin/Tips/TipsCreate');

    }

    public function store(TipsRequest $request)
    {
        $tips = new Tips();
        $tips = [
            'img' => $request->img,
        ];

        if($request->hasFile('img'))
        {
            $tips['img'] = UploadImage($request, 'img');
        }

        try {
            Tips::create($tips);
            return to_route('tips.index')->with(['message' => 'Tips Has Been Created!']);
        } catch(\Illuminate\Database\QueryException $e){
           return redirect()->back()->with(['message' => 'Tips Has Found!']);
        }
       
    }

    public function edit($id)
    {
        try {
            $tipsId = Tips::findOrFail($id);
            if (!$tipsId) {
                return redirect()->back()->with(['message' => 'Tips Not Found']);
            }
            return Inertia::render('Admin/Tips/TipsEdit', ['tips' => $tipsId]);
        } catch (\Throwable $th) {
            Log::error($th);
            return redirect()->back()->with(['message' => 'Tips Not Found']);
        }
    }

    public function update(Request $request, $id)
    {
        $tips = [
            'img' => $request->img,
        ];

        if($request->hasFile('img'))
        {
            if($request->oldimage)
            {
                Storage::disk('public')->delete('images/' . $request->oldimage);
            }

            $tips['img'] = UploadImage($request, 'img');
        }else{
            $tips['img'] = $request->oldimage;
        }

        try {
            $tipsId = Tips::findOrFail($id);
            if (!$tipsId) {
                return redirect()->back()->with(['message' => 'Tips Not Found']);
            }
            $tipsId->update($tips);
            return to_route('tips.index')->with(['message' => 'Tips Has Been Updated!']);
        } catch (\Throwable $th) {
            Log::error($th);
            return redirect()->back()->with(['message' => 'Tips Not Found']);
        }
    }

    public function destroy($id)
    {
        try {
            $tipsId = Tips::findOrFail($id);
            if (!$tipsId) {
                return redirect()->back()->with(['message' => 'Tips Not Found']);
            }

            if ($tipsId->img == null) {
                return redirect()->back()->with(['message' => 'Image Tips Not Found']);
            }

            if ($tipsId->img) {
                Storage::disk('public')->delete('images/'.$tipsId->img);
            }

            $tipsId->delete();
            return redirect()->back()->with(['message' => 'Tips Has Been Delete!']);
        } catch (\Throwable $th) {
            Log::error($th);
            return redirect()->back()->with(['message' => 'Tips Not Found']);
        }
    }
}
