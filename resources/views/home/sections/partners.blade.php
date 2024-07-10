<div class="flex flex-col relative overflow-x-clip">
    <h1 class="text-center font-bold pt-14">INDUSTRY PARTNERS</h1>
    <x-card>
            <div class="container mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 cursor-pointer">
                @foreach($partners as $partner)
                <div class="img-pop rounded-full">
                    <a href="{{$partner->web_url}}" target="_blank">
                    <img class="w-full h-auto object-cover" src="{{ asset($partner->image_name) }}" alt="{{$partner->name}} Logo">
                    </a>
                </div>
                @endforeach
            </div>
    </x-card>

    <h1 class="text-center font-bold pt-14">PARTNER DEVS AND STUDIOS</h1>
    <x-card>

            <p class="text-center">We believe that through collaborative efforts of every team, we can produce innovative, creative and diverse concepts or ideas.</p>
            <div class="container mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 cursor-pointer">
                @foreach($partnerStudios as $partnerStudio)
                <div class="img-pop rounded-full">
                    <a href="{{$partnerStudio->link}}" target="_blank">
                    <img class="w-full h-auto object-cover" src="{{ asset($partnerStudio->image_name) }}" alt="{{$partnerStudio->name}} Logo">
                    </a>
                </div>
                @endforeach
            </div>
            <div class="flex justify-center">
                <button id="scroll-btn" class="hover:animate-bounce relative inline-flex items-center inline-block px-5 py-3 overflow-hidden font-bold rounded-full group text">
                    <span class="w-32 h-32 rotate-55 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-black opacity-[3%]"></span>
                    <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-yellow-500 opacity-100 group-hover:-translate-x-8"></span>
                    <span class="relative w-full text-left text-black transition-colors duration-100 ease-in-out group-hover:text-black">Learn More</span>
                    <span class="absolute inset-0 border-2 border-rose-950 rounded-full"></span>
                    </button>
                </a>
                </div>

    </x-card>

</div>


