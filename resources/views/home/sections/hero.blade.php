<section id="#Home" class="">

    <div class=" flex flex-col-reverse md:flex-row mx-none mb-16 md:justify-between items-center backdrop-blur-lg bg-cover bg-center w-full h-screen px-0 md:px-44"
        style="background-image: url('images/DS_background_1080p.jpg'); background-size: cover;">
        <div class="">
            <h2 class="sm:text-center md:mb-4 ml-4 text-6xl font-bold tracking-wide leading-none text-yellow-600">
                Lamina Studio
                </h2>
                <p class="sm:text-center md:font-light ml-4 mb-8 text-xl text-yellow-600">
                    Developer and Creator of Dungeon Souls<br>a roguelike dungeon-crawling action game<br>available on
                    Steam.
                </p>
                <div class="sm:text-center">
                    <button type="button"
                        class="mx-auto sm:mx-24 font-semibold border-2 border-black bg-gradient-to-r from-amber-900 to-yellow-400 hover:bg-gradient-to-l hover:from-amber-900 hover:to-yellow-400 rounded-xl text-sm px-5 py-2.5 text-center mb-2">
                        See Latest Games Here
                    </button>
                </div>

        </div>

        <div id="carouselExampleControls" class="sm:relative md:w-[66rem]  border-2 " data-te-carousel-init
            data-te-carousel-slide>
            <!--Carousel items-->
            <div class="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
                @foreach ($heroSection->images as $image)
                <div class="relative float-left -mr-[100%] @if(!$loop->first) hidden @endif w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                    data-te-carousel-item @if($loop->first) data-te-carousel-active @endif>
                    <img src="{{$image['image_name']}}"
                        class="block w-full" alt="{{$image['name']}}" />
                </div>
                @endforeach
            </div>

            <!--Carousel controls - prev item-->
            <button
                class="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                type="button" data-te-target="#carouselExampleControls" data-te-slide="prev">
                <span class="inline-block h-8 w-8">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="h-6 w-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </span>
                <span
                    class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Previous</span>
            </button>
            <!--Carousel controls - next item-->
            <button
                class="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                type="button" data-te-target="#carouselExampleControls" data-te-slide="next">
                <span class="inline-block h-8 w-8">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="h-6 w-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </span>
                <span
                    class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Next</span>
            </button>
        </div>

    </div>
</section>
