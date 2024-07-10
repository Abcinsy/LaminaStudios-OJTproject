<footer class="bg-slate-500 mt-5  ">



    <div class="flex flex-col  py-5 relative overflow-x-clip justify-around">
        {{-- <div class="circle rounded-full" style="bottom:0"></div> --}}

        <div class="flex flex-col-reverse lg:flex-row">

            <div class="">
            {{-- First column --}}
                <div class="justify-center items-center lg:justify-self-start lg:pl-10 pt-5 flex flex-row relative">
                    <div class="flex flex-col items-center justify-start md:justify-center text-center lg:mr-44  ">
                        <div class="flex justify-center ">
                            <img src="{{ asset('images/LS_newlogo.png') }}" width="240" height="auto"   alt="">
                        </div>
                        <p class="my-10 text-amber-300 ">United States</p>
                        <div class="block lg:hidden  left-1/2 -ml-0.5 h-0.5 w-80  px-7 bg-gray-600"></div>
                    </div>
                    <div class="hidden sm:hidden lg:inline-block md:h-72 h-96 min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50"></div>

                </div>
                <div class="lg:hidden block lg:col-span-4">
                    <div class="mt-5 flex flex-row gap-y-10 gap-x-24 justify-center lg:-translate-x-48 ">
                        <p class="text-amber-500 text-opacity-60  ">© 2022 Lamina Studios, LLC. All Rights Reserved.</p>
                    </div>
                </div>
            </div>

            <div class=" grow lg:ml-5">

                <div class="grid sm:grid-cols-1 lg:grid-cols-2  justify-items-stretch ">

                {{-- Second Column /Contacts --}}
                    <div class="lg:text-left text-start  lg:justify-self-center mx-5  "  >
                        <h2 class="text-white lg:pb-20 pt-5 font-semibold text-xl">Contacts</h2>
                        <div class="flex text-start justify-start  lg:justify-center">
                            <div class="grid grid-cols-1 gap-y-2">
                                <a href="mailto:support@laminastudios.com">
                                    <div class="flex flex-row gap-2">
                                        <p class="text-white">Support:</p>
                                        <p class="text-amber-300 ">support@laminastudios.com</p>
                                    </div>
                                </a>
                                <a href="mailto:info@laminastudios.com">
                                    <div class="flex flex-row gap-2">
                                        <p class="text-white">Info:</p>
                                        <p class="text-amber-300 ">info@laminastudios.com</p>
                                    </div>
                                </a>
                                <a href="mailto:business@laminastudios.com">
                                    <div class="flex flex-row gap-2">
                                        <p class="text-white">Business:</p>
                                        <p class="text-amber-300 ">business@laminastudios.com</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                    </div>

                    {{-- Third Column/ Links --}}
                    <div class="lg:text-left text-start lg:justify-self-center mx-5 my-10 lg:my-0   ">
                        <h2 class="hidden lg:block text-white lg:pb-20 pt-5 font-semibold text-xl">Links</h2>
                        <div class="flex text-start justify-center">
                            <div class="flex flex-row lg:flex-col gap-y-2 lg:gap-x-0 gap-x-16 pt-5 lg:pt-0 ">
                                <a href="http://Discord.com" class="text-amber-300 ">
                                    <div class="flex flex-row gap-5 transition hover:text-amber-500 duration-200   ">
                                        <i class="bi bi-discord text-white"></i>
                                        <p class="hidden lg:block" >Discord</p>
                                    </div>
                                </a>

                                <a class="text-amber-300 " href="http://Facebook.com">
                                    <div class="flex flex-row gap-5 transition hover:text-amber-500 duration-200   ">
                                        <i class="bi bi-facebook text-white"></i>
                                        <p class="hidden lg:block" >Facebook</p>
                                    </div>
                                </a>

                                <a class="text-amber-300 " href="http://Instagram.com">
                                    <div class="flex flex-row gap-5 transition hover:text-amber-500 duration-200   ">
                                        <i class="bi bi-instagram text-white"></i>
                                        <p class="hidden lg:block" >Instagram</p>
                                    </div>
                                </a>

                                <a class="text-amber-300 " href="http://TikTok.com">
                                    <div class="flex flex-row gap-5 transition hover:text-amber-500 duration-200   ">
                                        <i class="bi bi-tiktok text-white"></i>
                                        <p class="hidden lg:block" >TikTok</p>
                                    </div>
                                </a>

                                <a class="text-amber-300 " href="http://Twitter.com">
                                    <div class="flex flex-row gap-5 transition hover:text-amber-500 duration-200   ">
                                        <i class="bi bi-twitter text-white"></i>
                                        <p class="hidden lg:block" >Twitter</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- Second row -->
                    <div class="lg:col-span-4 my-6 lg:my-3 ">
                        <div class="flex flex-col lg:flex-row gap-y-4 gap-x-24 mt-5 justify-start items-start  lg:justify-center lg:items-center lg:-translate-x-48 mx-5 ">
                            <button class="rounded-sm w-auto transition hover:scale-125 duration-200 " type="button">
                                <p class="text-amber-400 font-semibold text-sm py-2">Terms and Conditions of Use</p>
                            </button>
                            <button class="rounded-sm w-auto  transition hover:scale-125 duration-200 " type="button">
                                <p class="text-amber-400 font-semibold text-sm py-2">Privacy Statement</p>
                            </button>
                        </div>
                    </div>

                    <!-- Third row -->
                    <div class="hidden lg:block lg:col-span-4">
                        <div class="mt-5 flex flex-row gap-y-10 gap-x-24 justify-center lg:-translate-x-48 ">
                            <p class="text-amber-300 text-opacity-60  text-center ">© 2022 Lamina Studios, LLC. All Rights Reserved.</p>
                        </div>
                    </div>


                </div>
            </div>


        </div>


    </div>

    <!-- gradient border at the bottom -->
    <div class="col-span-4 ">
        <div class="h-3 bg-gradient-to-r from-amber-900 to-amber-500"></div>
    </div>
</footer>
