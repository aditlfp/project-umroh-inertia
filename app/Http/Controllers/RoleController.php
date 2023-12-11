<?php

namespace App\Http\Controllers;

use App\Http\Requests\RoleRequest;
use App\Http\Resources\RoleResource;
use App\Models\Role;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class RoleController extends Controller
{
    public function index(Request $request)
    {
        $role = new RoleResource(Role::when($request->search, function ($query, $search){
            $query->where('name', 'LIKE', '%' . $search . '%');
        })->paginate(15));

        return Inertia::render('Admin/Role/RoleIndex', ['role' => $role]);
    }

    public function create()
    {
        return Inertia::render('Admin/Role/RoleCreate');
    }

    public function store(RoleRequest $request)
    {
        $role = new Role();
        $role = $request->all();
        Role::create($role);
        return to_route('');
    }

    public function edit($id)
    {
        try {
            $roleId = Role::findOrFail($id);
            if (!$roleId) {
                return redirect()->back()->with(['message' => 'Role Not Found']);
            }
            return Inertia::render('Admin/Role/RoleEdit', ['role' => $roleId]);
        } catch (\Throwable $th) {
            Log::error($th);
            return redirect()->back()->with(['message' => 'Role Not Found']);
        }
    }

    public function update(Request $request, $id)
    {
        $role = [
            'name' => $request->name,
        ];

        try {
            $roleId = Role::findOrFail($id);
            if (!$roleId) {
                return redirect()->back()->with(['message' => 'Role Not Found']);
            }
            $roleId->update($role);
            return to_route('')->with(['message' => 'Role Has Been Update!!']);
        } catch (\Throwable $th) {
            Log::error($th);
            return redirect()->back()->with(['message' => 'Role Not Found']);
        }
    }

    public function destroy($id)
    {
        try {
            $roleId = Role::findOrFail($id);
            if (!$roleId) {
                return redirect()->back()->with(['message' => 'Role Not Found']);
            }
            $roleId->delete();
            return to_route('')->with(['message' => 'Role Has Been Delete!!']);
        } catch (\Throwable $th) {
            Log::error($th);
            return redirect()->back()->with(['message' => 'Role Not Found']);
        }
    }
}
