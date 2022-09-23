<?php

namespace App\Http\Controllers;

use App\Models\Tours;
use App\Models\UsersDet;
use App\Models\ToursReq;

use Illuminate\Http\Request;

class ToursReqController extends Controller
{
    public function getRequest() {
        $data = ToursReq::orderBy('id', 'DESC')->get();

        if (!empty($data)) {
            foreach ($data as $key => $val) {
                $id = $val['user'];
                $user = UsersDet::find($id);

                $data[$key]['user_data'] = $user;
            }
        }

        return response()->json([
            'status' => (!empty($data)) ? true : false,
            'data' => $data
        ]);
    }

    public function getRequestId($id) {
        $data = ToursReq::where('user', $id)
                            ->orderBy('id', 'DESC')
                            ->get();

        if (!empty($data)) {
            foreach ($data as $key => $val) {
                $id = $val['recomendation'];
                $tour = Tours::find($id);

                $data[$key]['recomendation_data'] = $tour;
            }
        }

        return response()->json([
            'status' => (!empty($data)) ? true : false,
            'data' => $data,
        ]);
    }

    public function addRequest(Request $request) {
        $fields = $this->validate($request, [
            'details' => 'required|string',
            'user' => 'required'
        ]);

        $data = new ToursReq();
        $data->details = $fields['details'];
        $data->user = $fields['user'];
        $data->recomendation = 0;           // (id tour)
        $data->status = 1;
        $data->save();

        return response()->json([
            'status' => true
        ]);
    }

    public function updateRequest(Request $request, $id) {
        $data = ToursReq::find($id);

        $data->status = $request['status'];
        $data->save();

        return response()->json([
            'status' => true
        ]);
    }

    public function updateRecomendation(Request $request, $id) {
        $data = ToursReq::find($id);

        $data->status = $request['recomendation'];
        $data->save();

        return response()->json([
            'status' => true
        ]);
    }
}
