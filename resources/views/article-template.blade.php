@extends('layouts.layout')

@section('title')
    {{ $article->title }}
@endsection

@section('content')
    <div class="flex md:mx-40 my-52">
        <div class="flex flex-col xl:w-3/4 w-full">
            <div class="h-[20rem] w-full bg-gray-200 mb-8">
                <img class="h-full w-full object-contain" src="{{ asset($article->image_name ?? 'images/LS_newlogo.png') }} " width="300px" height="300">
            </div>
    
    
            <div class="flex flex-col lg:px-0 px-4">
                <h2 class="text-gray-700 font-bold text-5xl">
                    {{ $article->title }}
                </h2>
    
                <span class="text-gray-500">
                    By <span class="font-bold italic text-gray-800 ">{{ $article->author->name }} </span>
                    , Created on {{ date('jS M Y', strtotime($article->created_at)) }}
                </span>
    
                <span class="text-xl text-gray-700 leading-8 font-light whitespace-pre-line">
                    {!! $article->article !!}
                </span>
            </div>
        </div>
        
        {{-- <div class="flex flex-col w-1/4">
            Other news
        </div> --}}
    </div>
@endsection
