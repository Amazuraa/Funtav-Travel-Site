<?php

namespace App\Http\Controllers;

use App\Models\Users;
use App\Models\UsersDet;
use App\Models\Admin;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;


class AuthController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */

    public function login(Request $request) {
        $fields = $this->validate($request, [
            'email' => 'required|string',
            'password' => 'required|string'
        ]);

        // First Check
        $user = Users::where('email', $fields['email'])->first();
        $isUser = True;

        if (!$user) {
            $user = Admin::where('email', $fields['email'])->first();

            if (!$user) {
                return response()->json([
                    'status' => false, 
                    'data' => 'Login Fail, please check email or password must valid'
                ]);   
            }

            $isUser = false;
            $user['Privilege'] = True;
        }

        // Final Check
        if(!Hash::check($fields['password'], $user->password)) {
            return response()->json([
                'status' => false, 
                'data' => 'Login Fail, please check email or password must valid'
            ]);
        }

        return response()->json([
            'status' => true, 
            'data' => $user
        ]);
    }
}
