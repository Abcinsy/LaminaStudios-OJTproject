@extends('layouts.layout')

@section('title')
    Creatives
@endsection

@section('content')
    <div class=" flex flex-col items-center">
        <p
            class="inline-block px-3 py-px mb-4 mt-8 text-l font-semibold tracking-wider text-black uppercase font-semibold font-sans    rounded -full bg-teal-accent-400">
            The Featured Creatives
        </p>

        <main
            class="sm:my-16 py-12 px-12 bg-slate-300 flex flex-col items-center rounded-xl md:my-8 bg-slate-300 flex flex-col items-center rounded-xl">
            <div class="container mx-auto  py-3 ">
                <div class="flex items-center justify-between">

                    <div class="sm:text-center w-full text-black pb-12 md:text-center text-2xl font-semibold font-sans">
                        Featured Artist of the Month !
                    </div>

                </div>


            </div>
            <div class="container mx-auto px-6">
                <div class="md:flex md:items-center">
                    <div class="w-full h-54 md:w-1/2 lg:h-96">
                        <img class="sm:hover:scale-75 h-full w-full cursor-pointer rounded-md object-cover max-w-lg mx-auto
                                md:hover:scale-125 h-full w-full cursor-pointer rounded-md object-cover max-w-lg mx-auto"
                            src="{{ $featured_creative['image_name'] }}" alt="{{ $featured_creative['name'] }}">
                    </div>
                    <div class="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
                        <h1
                            class="sm:text-center md:text-black uppercase font-semibold font-sans  text-xl font-semibold font-sans">
                            {{ $featured_creative['name'] }}</h1>
                        <p
                            class="sm:text-center text-black ml-2 pt-12 tracking-wider font-bold font-sans md:text-black ml-2 pt-12 tracking-wider font-bold font-sans">
                            {{ $featured_creative['blurb'] }}
                        </p>
                        @foreach($featured_creative['links'] as $site => $link)
                        <a href="{{ $link }}" target="_blank"
                            class="sm:ml-40 relative inline-flex items-center px-12 py-3 mt-8 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50
                                         md:mx-32 relative inline-flex items-center px-12 py-3 mt-8 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50">
                            <span
                                class="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                            <span
                                class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </span>
                            <span class="relative font-sans capitalize">{{ $site }}</span>
                        </a>
                        @endforeach

                    </div>
                </div>
                <div class="mt-16">
                    <div class="grid gap-10 grid-cols-1 sm:grid-cols-2 gap-14 lg:grid-cols-3 xl:grid-cols-4 mt-6">
                        @foreach ($featured_section->images as $image)
                        <div class="w-full max-w-sm mx-auto rounded-md shadow-md ">
                            <div class="hover:animate-pulse cursor-pointer  hover:scale-125 flex items-end justify-end h-56 w-full bg-cover"
                                style=" background-image: url('{{$image['image_name']}}');">

                            </div>
                            <div class="px-5 py-3 mt-8">
                                <h3 class="text-black uppercase font-semibold font-sans text-center ">{{$image['description']}}</h3>

                            </div>
                        </div>
                        @endforeach
                    </div>
                </div>
            </div>
        </main>
    </div>

    <x-card>
        <p class="w-full text-center px-3 mb-8 text-xl font-semibold tracking-wider text-black uppercase rounded">
            The Creatives
        </p>
        <div class="grid gap-20 mx-auto lg:max-w-screen-lg lg:grid-cols-5 text-align:center;">
            @foreach ($creatives as $creative)
                <div class="flex flex-col items-center">
                    <a data-te-toggle="modal"
                        data-te-target="#{{ preg_replace('/[^A-Za-z0-9\-]/', '', str_replace(' ', '', $creative['name'])) }}"
                        data-te-ripple-init data-te-ripple-color="light">

                        <img class="hover:scale-125 cursor-pointer object-cover w-28 h-28 mb-2  "
                            src="{{ $creative['image_name'] }}" alt="Person" />

                    </a>

                    <div class="flex flex-col items-center">
                        <p class="text-lg font-bold text-center">{{ $creative['name'] }}</p>
                        <p class="text-sm text-gray-800 text-center">{{ $creative['title'] }}</p>
                    </div>
                </div>
            @endforeach
        </div>
    </x-card>

    @foreach ($creatives as $creative)
        <div data-te-modal-init
            class="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
            id="{{ preg_replace('/[^A-Za-z0-9\-]/', '', str_replace(' ', '', $creative['name'])) }}" tabindex="-1"
            aria-labelledby="exampleModalXlLabel" aria-modal="true" role="dialog">
            <div data-te-modal-dialog-ref
                class="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px] min-[992px]:max-w-[800px] min-[1200px]:max-w-[1140px]">
                <div
                    class="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
                    <div
                        class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                        <!--Modal title-->
                        <h5 class="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
                            id="exampleModalXlLabel"> {{ $creative['name'] }}
                        </h5>
                        <!--Close button-->
                        <button type="button"
                            class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                            data-te-modal-dismiss aria-label="Close">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="h-6 w-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <!--Modal body-->
                    <div class="relative p-4 flex lg:flex-row flex-col justify-center items-center">
                        <img src="{{ $creative['image_name'] }}" class="justify-item-start h-full md:h-96">
                        <p class="text-align-center self-start text-black mx-4 mt-4 tracking-wider font-light text-justify">
                            {{ $creative['description'] }}</p>
                    </div>
                </div>
            </div>
        </div>
    @endforeach
@endsection
