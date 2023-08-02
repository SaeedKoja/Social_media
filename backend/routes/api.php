<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SocialMediaController;
use App\Http\Controllers\CommentController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::prefix('SocialMedia')->group(function () {
    Route::get('/posts', [SocialMediaController::class, 'index']);
    Route::post('/post', [SocialMediaController::class, 'store']);
    Route::get('/posts/{id}', [SocialMediaController::class, 'show']);
    Route::get('/comments', [CommentController::class, 'index']);
    Route::get('/comments/{post}', [CommentController::class, 'show']);
    Route::post('/posts/{post}/comment', [CommentController::class, 'store']);
});
