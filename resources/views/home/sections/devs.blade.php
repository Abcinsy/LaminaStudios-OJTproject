<div id="devs" class="flex flex-col relative overflow-x-clip">
    @foreach($partnerStudios as $partnerStudio)
        @if($partnerStudio->is_featured)
            <x-card>
                <div class="md:flex md:items-center">
                    <div class="w-full h-64 md:w-1/2 lg:h-96">
                        <img class="h-full w-full rounded-md object-contain rounded-3xl max-w-lg mx-auto" src="{{ asset($partnerStudio->image_name) }}">
                    </div>
                    <div class="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
                        <h3 class="text-black uppercase text-lg text-center font-bold italic">{{$partnerStudio->blurb}}</h3>
                        <p class ="text-black pt-12 tracking-wider font-light">
                            {{$partnerStudio->description}}
                        </p>
                    </div>
                </div>

                <h3 class="text-black uppercase text-lg text-center font-bold">Games</h3>
                <div class="container mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 cursor-pointer">
                    @foreach($partnerStudio->games as $game)
                    <div class="img-devs">
                        <img class="w-full h-auto object-cover rounded-3xl" src="{{ asset($game->image_name) }}" alt="Devs Logo">
                        <h3 class="text-center text-black uppercase pt-3 pb-2 font-semibold">{{$game->name}}</h3>
                    </div>
                    @endforeach
                </div>

            </x-card>
        @endif
    @endforeach
    {{-- <x-card>

            <div class="md:flex md:items-center">
                <div class="w-full h-64 md:w-1/2 lg:h-96">
                    <img class="h-full w-full rounded-md object-cover rounded-3xl max-w-lg mx-auto" src="{{ asset('devs/devlogo.png') }}">
                </div>
                <div class="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
                    <h3 class="text-black uppercase text-lg text-center font-bold italic">We Build Games From Bright Ideas</h3>
                    <p class ="text-black pt-12 tracking-wider font-light">
                        High Leap Studios is more than just a studio! We aim to showcase HIGH LEAP of game innovation while bringing you along the journey of creating games.
                        We are your reliable source of transforming your bright game ideas into elating and thrilling 2D games!
                    </p>
                </div>
            </div>

            <h3 class="text-black uppercase text-lg text-center font-bold">Games</h3>
            <div class="container mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 cursor-pointer">
                <div class="img-devs">
                    <img class="w-full h-auto object-cover rounded-3xl" src="{{ asset('/devs/hl/BBR.png') }}" alt="Devs Logo">
                    <h3 class="text-center text-black uppercase pt-3 pb-2 font-semibold">Bad Bots Rise</h3>
                </div>
                <div class="img-devs">
                    <img class="w-full h-auto object-cover rounded-3xl" src="{{ asset('/devs/hl/AN.png') }}" alt="Devs Logo">
                    <h3 class="text-center text-black uppercase pt-3 pb-2 font-semibold">Aninag</h3>
                </div>
                <div class="img-devs">
                    <img class="w-full h-auto object-cover rounded-3xl" src="{{ asset('/devs/hl/LOAC.png') }}" alt="Devs Logo">
                    <h3 class="text-center text-black uppercase pt-3 pb-2 font-semibold">Life of a Commander</h3>
                </div>
                <div class="img-devs">
                    <img class="w-full h-auto object-cover rounded-3xl" src="{{ asset('/devs/hl/RD.png') }}" alt="Devs Logo">
                    <h3 class="text-center text-black uppercase pt-3 pb-2 font-semibold">Runny Dodge</h3>
                </div>
                <div class="img-devs">
                    <img class="w-full h-auto object-cover rounded-3xl" src="{{ asset('/devs/hl/SSS.png') }}" alt="Devs Logo">
                    <h3 class="text-center text-black uppercase pt-3 pb-2 font-semibold">Super Sale Showdown</h3>
                </div>
                <div class="img-devs">
                    <img class="w-full h-auto object-cover rounded-3xl" src="{{ asset('/devs/hl/HUD.png') }}" alt="Devs Logo">
                    <h3 class="text-center text-black uppercase pt-3 pb-2 font-semibold">Hero? U Dead</h3>
                </div>
            </div>

    </x-card>

    <x-card>

            <div class="md:flex md:items-center">
                <div class="w-full h-64 md:w-1/2 lg:h-96">
                    <img class="h-full w-full rounded-md object-fit rounded-3xl max-w-lg mx-auto" src="{{ asset('devs/devlogo3.png') }}">
                </div>
                <div class="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
                    <h3 class="text-black uppercase text-lg text-center font-bold italic">Pinoy Horror Indie Dev</h3>
                    <p class ="text-black pt-12 tracking-wider font-light ">
                        We are a Pinoy Indie Horror Game Developer living in Laguna Philippines. We are developing different kinds of games but decided to stick to one genre (Horror Genre).
                        We are also in partnership with Lamina Studios. A USA-based publisher & game developer company.
                    </p>
                </div>
            </div>

            <h3 class="text-black uppercase text-lg text-center font-bold">Games</h3>
            <div class="container mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 cursor-pointer">
                <div class="img-devs">
                    <img class="w-full h-auto object-cover rounded-3xl" src="{{ asset('/devs/ss/GN.png') }}" alt="Devs Logo">
                    <h3 class="text-center text-black uppercase pt-3 pb-2 font-semibold">GoodNight</h3>
                </div>
                <div class="img-devs">
                    <img class="w-full h-auto object-cover rounded-3xl" src="{{ asset('/devs/ss/L.png') }}" alt="Devs Logo">
                    <h3 class="text-center text-black uppercase pt-3 pb-2 font-semibold">LUCAS - Basement Demo</h3>
                </div>
                <div class="img-devs">
                    <img class="w-full h-auto object-cover rounded-3xl" src="{{ asset('/devs/ss/LB.png') }}" alt="Devs Logo">
                    <h3 class="text-center text-black uppercase pt-3 pb-2 font-semibold">Left Behind</h3>
                </div>
                <div class="img-devs">
                    <img class="w-full h-auto object-cover rounded-3xl" src="{{ asset('/devs/ss/NB.png') }}" alt="Devs Logo">
                    <h3 class="text-center text-black uppercase pt-3 pb-2 font-semibold">Nyctophobia Bloodline</h3>
                </div>
                <div class="img-devs">
                    <img class="w-full h-auto object-cover rounded-3xl" src="{{ asset('/devs/ss/ND.png') }}" alt="Devs Logo">
                    <h3 class="text-center text-black uppercase pt-3 pb-2 font-semibold">Nyctophobia Devil Unleashed</h3>
                </div>
                <div class="img-devs">
                    <img class="w-full h-auto object-cover rounded-3xl" src="{{ asset('/devs/ss/RR.png') }}" alt="Devs Logo">
                    <h3 class="text-center text-black uppercase pt-3 pb-2 font-semibold">RonRon</h3>
                </div>
                <div class="img-devs">
                    <img class="w-full h-auto object-cover rounded-3xl" src="{{ asset('/devs/ss/TH.png') }}" alt="Devs Logo">
                    <h3 class="text-center text-black uppercase pt-3 pb-2 font-semibold">Triple Hell</h3>
                </div>
                <div class="img-devs">
                    <img class="w-full h-auto object-cover rounded-3xl" src="{{ asset('/devs/ss/TM.png') }}" alt="Devs Logo">
                    <h3 class="text-center text-black uppercase pt-3 pb-2 font-semibold">The Missing</h3>
                </div>
                <div class="img-devs">
                    <img class="w-full h-auto object-cover rounded-3xl" src="{{ asset('/devs/ss/U.png') }}" alt="Devs Logo">
                    <h3 class="text-center text-black uppercase pt-3 pb-2 font-semibold">UNDER</h3>
                </div>
                <div class="img-devs">
                    <img class="w-full h-auto object-cover rounded-3xl" src="{{ asset('/devs/ss/UP.png') }}" alt="Devs Logo">
                    <h3 class="text-center text-black uppercase pt-3 pb-2 font-semibold">UPLOADED</h3>
                </div>
            </div>

    </x-card>

    <x-card>

            <div class="md:flex md:items-center">
                <div class="w-full h-64 md:w-1/2 lg:h-96">
                    <img class="h-full w-full rounded-md object-cover rounded-3xl max-w-lg mx-auto" src="{{ asset('devs/devlogo2.png') }}">
                </div>
                <div class="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
                    <h2 class="text-black uppercase text-lg text-center font-bold mb-12 italic">Polylab Studios</h2>
                    <h3 class="text-black pt-12 tracking-wider font-light ">A primitive man trying to survive the world while playing and creating fun games</h3>
                </div>
            </div>

            <h3 class="text-black uppercase text-lg text-center font-bold">Games</h3>
            <div class="container mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-2 cursor-pointer">
                <div class="img-devs ">
                    <img class="w-full h-auto object-cover rounded-3xl" src="{{ asset('/devs/pl/JTV.jpg') }}" alt="Devs Logo">
                    <h3 class="text-center text-black uppercase pt-3 pb-2 font-semibold">Journey To Valhalla</h3>
                </div>
            </div>

    </x-card> --}}
</div>




