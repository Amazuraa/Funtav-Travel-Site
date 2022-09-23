<?php

namespace App\Http\Controllers;

use App\Models\Users;
use App\Models\UsersDet;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;

class UsersController extends Controller
{
    public function register(Request $request) {
        $fields = $this->validate($request, [
            'email' => 'required|string',
            'password' => 'required|string',
            'name' => 'required|string',
            'phone' => 'required',
            'address' => 'required|string'
        ]);

        $user = new Users();
        $user->email = $fields['email'];
        $user->password = app('hash')->make($fields['password']);   // equals to bcrypt()
        $user->save();

        $new_id = $user->id;

        $det = new UsersDet();
        $det->id = $new_id;
        $det->name = $fields['name'];
        $det->phone = $fields['phone'];
        $det->address = $fields['address'];
        $det->departures = "[]";
        $det->save();

        return response()->json([
            'status' => true
        ]);
    }
}
