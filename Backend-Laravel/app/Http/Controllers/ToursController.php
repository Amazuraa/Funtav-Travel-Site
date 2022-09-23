<?php

namespace App\Http\Controllers;

use App\Models\Tours;
use App\Models\ToursReq;

use Illuminate\Http\Request;

class ToursController extends Controller
{
    public function getTour() {
        $data = Tours::orderBy('id', 'DESC')
                        ->where('status', 1)
                        ->get();

        return response()->json([
            'status' => (!empty($data)) ? true : false,
            'data' => $data
        ]);
    }

    public function getTourAll() {
        $data = Tours::orderBy('id', 'DESC')->get();

        return response()->json([
            'status' => (!empty($data)) ? true : false,
            'data' => $data
        ]);
    }

    public function getTourId($id) {
        $data = Tours::find($id);

        return response()->json([
            'status' => (!empty($data)) ? true : false,
            'data' => $data
        ]);
    }

    public function addTour(Request $request) {
        $fields = $this->validate($request, [
            'title' => 'required|string',
            'duration' => 'required',
            'price' => 'required',
            'style' => 'required|string',
            'region' => 'required|string'
        ]);

        $user = new Tours();
        $user->title = $fields['title'];
        $user->duration = $fields['duration'];
        $user->price = $fields['price'];
        $user->style = $fields['style'];
        $user->group = $request['group'];
        $user->services = $request['services'];
        $user->img = $request['img'];
        $user->departures = "[]";
        $user->region = $fields['region'];
        $user->status = 1;
        $user->save();

        return response()->json([
            'status' => true
        ]);
    }

    public function addTourCustom(Request $request) {
        $fields = $this->validate($request, [
            'title' => 'required|string',
            'duration' => 'required',
            'price' => 'required',
            'style' => 'required|string',
            'region' => 'required|string'
        ]);

        $user = new Tours();
        $user->title = $fields['title'];
        $user->duration = $fields['duration'];
        $user->price = $fields['price'];
        $user->style = $fields['style'];
        $user->group = $request['group'];
        $user->services = $request['services'];
        $user->img = $request['img'];
        $user->departures = "[]";
        $user->region = $fields['region'];
        $user->status = 2;
        $user->save();

        $new_id = $user->id;

        $req = ToursReq::find($request['id_req']);
        $req->recomendation = $new_id;
        $req->status = 2;
        $req->save();

        return response()->json([
            'status' => true
        ]);
    }

    public function updateTour(Request $request, $id) {
        $fields = $this->validate($request, [
            'title' => 'required|string',
            'duration' => 'required',
            'price' => 'required',
            'style' => 'required|string',
            'region' => 'required|string',
            // 'status' => 'required'
        ]);

        $user = Tours::find($id);

        $user->title = $fields['title'];
        $user->duration = $fields['duration'];
        $user->price = $fields['price'];
        $user->style = $fields['style'];
        $user->group = $request['group'];
        $user->services = $request['services'];
        $user->img = $request['img'];
        $user->departures = "[]";
        $user->region = $fields['region'];
        // $user->status = $request['status'];
        $user->save();

        return response()->json([
            'status' => true
        ]);
    }

    public function updateTourStat(Request $request, $id) {
        $fields = $this->validate($request, [
            'status' => 'required'
        ]);

        $data = Tours::find($id);

        $data->status = $fields['status'];
        $data->save();

        return response()->json([
            'status' => true,
            'data' => $data
        ]);
    }

    public function updateTourDeparture(Request $request, $id) {
        $fields = $this->validate($request, [
            'departures' => 'required'
        ]);

        $data = Tours::find($id);

        $data->departures = $fields['departures'];
        $data->save();

        return response()->json([
            'status' => true
        ]);
    }

    public function deleteTour($id) {
        $data = Tours::destroy($id);
        return response()->json([
            'status' => true,
            'data' => $data
        ]);
    }

    public function searchTour(Request $request)
    {
        $fields = $this->validate($request, [
            'key' => 'required',
            'group' => 'required',
        ]);

        $data = Tours::where('region', 'like', '%'.$fields['key'].'%')
                        ->orWhere('group', 'like', '%'.$fields['group'].'%')
                        ->get();
        return response()->json([
            'status' => (!empty($data)) ? true : false,
            'data' => $data
        ]);
    }
}
