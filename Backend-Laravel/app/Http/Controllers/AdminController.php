<?php

namespace App\Http\Controllers;

use App\Models\Admin;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;

class AdminController extends Controller
{
    public function register(Request $request) {
        $fields = $this->validate($request, [
            'email' => 'required|string',
            'password' => 'required|string'
        ]);

        $user = new Admin();
        $user->email = $fields['email'];
        $user->password = app('hash')->make($fields['password']);   // equals to bcrypt()
        $user->save();

        return response()->json([
            'status' => true
        ]);
    }
}
