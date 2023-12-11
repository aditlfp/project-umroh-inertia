<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TipsController extends Controller
{
    public function index()
    {
        $role = new RoleResource(Role::when($request->search, function ($query, $search){
            $query->where('name', 'LIKE', '%' . $search . '%');
        })->paginate(15));

        return Inertia::render('Admin/Role/RoleIndex', ['role' => $role]);
    }
    
    public function create()
    {

    }

    public function store(Request $request)
    {

    }

    public function edit($id)
    {

    }

    public function update(Request $request, $id)
    {

    }

    public function destroy($id)
    {
        
    }
}
