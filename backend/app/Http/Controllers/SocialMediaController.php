<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreatePostRequest;
use App\Models\SocialMedia;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Resources\postResource;

class SocialMediaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return postResource::collection(SocialMedia::latest()->get());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CreatePostRequest $request)
    {
        $data = $request->all();
        $person = User::where('id', $request->Name)->get('name');
        $data['nameUser'] = $person[0]->name;
        if ($request->hasFile('AttSm')) {
            $image = $request->AttSm;
            $name = time() . '.' . $image->getClientOriginalExtension();
            $image->move('uploads/SocialMedia', $name);
            $data['AttSm'] = $name;
            $post = SocialMedia::create($data);
        } else {
            $post = SocialMedia::create($data);
        }
        return postResource::collection($post->latest()->take(1)->get());
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\SocialMedia  $socialMedia
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $socialMedia = new SocialMedia();
        $user = $socialMedia->get('Name');
        $postandcomments = SocialMedia::find($id);
        $user = User::where('id', $user[0]->Name)->get(['id', 'Name']);
        return response()->json([
            "Post" => $postandcomments,
            "user" => $user
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\SocialMedia  $socialMedia
     * @return \Illuminate\Http\Response
     */
    public function edit(SocialMedia $socialMedia)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\SocialMedia  $socialMedia
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, SocialMedia $socialMedia)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\SocialMedia  $socialMedia
     * @return \Illuminate\Http\Response
     */
    public function destroy(SocialMedia $socialMedia)
    {
        //
    }
}
