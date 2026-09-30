<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');



Route::get('/services', function () {
    return response()->json([
        'success' => true,
        'data' => [],
    ]);
});

Route::get('/projects', function () {
    return response()->json([
        'success' => true,
        'data' => [],
    ]);
});