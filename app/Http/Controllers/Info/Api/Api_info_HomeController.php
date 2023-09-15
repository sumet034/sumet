<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Api_info_HomeController extends Controller
{
    
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return response()->json([
            'message' => 'Welcome to the API Info Home Page'
        ]);
    }
}
