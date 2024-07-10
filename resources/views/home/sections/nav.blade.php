<!-- component -->
{{-- <nav class="relative px-4 py-2 flex justify-between items-center bg-yellow-500"> --}}
<nav id="navbar" class="  fixed z-[1] my-5 px-2 md:py-[11px] w-full top-0  flex justify-between items-center bg-yellow-500 md:bg-[rgba(234,179,8,.3)] hover:bg-yellow-500 " onmouseover="hover">
    <a id="logo" class="text-3xl font-bold leading-none" href="#">
        <img class="h-auto w-24 md:w-[140px] cursor-pointer mx-12 self-start" src="{{ asset('images/LS_newlogo.png') }}"
            alt="lamina studio logo">
    </a>
    <div class="lg:hidden">
        <button class="navbar-burger flex items-center text-blue-600 p-3">
            <svg class="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
        </button>
    </div>
    <ul class="hidden md:flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 mx-10 font-bold text-yellow-600">
        <li>
            <a name="link" class="text-black  text-lg hover:bg-[hsl(45,93.4%,80%)] py-2 px-6 mx-0 my-0  rounded-lg  hover:text-yellow-500   " href="#">Home</a>
        </li>
        <li>
            <a name="link" class="text-black  text-lg  hover:bg-[hsl(45,93.4%,80%)] py-2 px-6 mx-0 my-0  rounded-lg  hover:text-yellow-500 " href="#">About
                Us</a>
        </li>
        <li>
            <a name="link" class="text-black  text-lg hover:bg-[hsl(45,93.4%,80%)] py-2 px-6 mx-0 my-0  rounded-lg  hover:text-yellow-500 " href="#">Games</a>
        </li>
        <li>
            <a name="link" class=" text-black  text-lg hover:bg-[hsl(45,93.4%,80%)] py-2 px-6 mx-0 my-0  rounded-lg  hover:text-yellow-500 " href="#">Partners</a>
        </li>
        <a name="link" class="text-black  text-lg hover:bg-[hsl(45,93.4%,80%)] py-2 px-6 mx-0 my-0  rounded-lg  hover:text-yellow-500 " href="#">Contact
            Us</a>
        </li>
        @guest
            <li>
                <a  name="link" class=" text-black  text-lg hover:bg-[hsl(45,93.4%,80%)] py-2 px-6 mx-0 my-0  rounded-lg  hover:text-yellow-500 "
                    href="{{ route('login.show') }}">Login</a>
            </li>
        @endguest
        @auth
            <li>
                <div class="relative" data-te-dropdown-ref>
                    <a name="link" class="text-black flex" href="#" id="userDropDown" data-te-dropdown-toggle-ref
                        aria-expanded="false">{{ auth()->user()->username }}<span class="ml-2 w-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
                                <path fill-rule="evenodd"
                                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                    clip-rule="evenodd" />
                            </svg>
                        </span></a>
                    <ul class="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-slate-700 bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                        aria-labelledby="userDropDown" data-te-dropdown-menu-ref>
                        <li>
                            <a class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-yellow-400 hover:bg-slate-600 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400"
                                href="#" data-te-dropdown-item-ref>Dashboard</a>
                        </li>
                        <li>
                            <a class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-yellow-400 hover:bg-slate-600 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400"
                                href="{{ route('logout.perform') }}" data-te-dropdown-item-ref>Logout</a>
                        </li>
                    </ul>
                </div>
            </li>
        @endauth
    </ul>
</nav>
<div class="navbar-menu relative z-50 hidden">
    <div class="navbar-backdrop fixed  bg-yellow-500 opacity-25"></div>
    <nav
        class="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-neutral-100 border-r overflow-y-auto">
        <div class="flex items-center mb-8">
            <a class="mr-auto text-3xl font-bold leading-none" href="#">
                <img class="h-auto w-24 cursor-pointer mx-12 self-start" src="{{ asset('images/LS_newlogo.png') }}"
                    alt="lamina studio logo">
            </a>
            <button class="navbar-close">
                <svg class="h-6 w-6 text-black- cursor-pointer hover:text-yellow-500" xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
                    </path>
                </svg>
            </button>
        </div>
        <div>
            <ul>
                <li class="mb-1">
                    <a class="block p-4 text-sm font-semibold hover:bg-[hsl(45,93.4%,80%)] py-2 px-4 mx-0 my-0  rounded-lg hover:text-yellow-500"
                        href="#">Home</a>
                </li>
                <li class="mb-1">
                    <a class="block p-4 text-sm font-semibold hover:bg-[hsl(45,93.4%,80%)] py-2 px-4 mx-0 my-0  rounded-lg hover:text-yellow-500"
                        href="#">About Us</a>
                </li>
                <li class="mb-1">
                    <a class="block p-4 text-sm font-semibold hover:bg-[hsl(45,93.4%,80%)] py-2 px-4 mx-0 my-0  rounded-lg hover:text-yellow-500"
                        href="#">Games</a>
                </li>
                <li class="mb-1">
                    <a class="block p-4 text-sm font-semibold hover:bg-[hsl(45,93.4%,80%)] py-2 px-4 mx-0 my-0  rounded-lg hover:text-yellow-500"
                        href="#">Partners</a>
                </li>
                <li class="mb-1">
                    <a class="block p-4 text-sm font-semibold hover:bg-[hsl(45,93.4%,80%)] py-2 px-4 mx-0 my-0  rounded-lg hover:text-yellow-500"
                        href="#">Contact Us</a>
                </li>
                @guest
                    <li class="mb-1">
                        <a class="block p-4 text-sm font-semibold hover:bg-[hsl(45,93.4%,80%)] py-2 px-4 mx-0 my-0  rounded-lg hover:text-yellow-500"
                            href="{{ route('login.show') }}">Login</a>
                    @endguest
                    @auth
                    <li>
                        <div class="relative" data-te-dropdown-ref>
                            <a class="hover:text-yellow-600 flex" href="#" id="userDropDown"
                                data-te-dropdown-toggle-ref aria-expanded="false">{{ auth()->user()->username }}<span
                                    class="ml-2 w-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                        class="h-5 w-5">
                                        <path fill-rule="evenodd"
                                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </span></a>
                            <ul class="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-slate-700 bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                                aria-labelledby="userDropDown" data-te-dropdown-menu-ref>
                                <li>
                                    <a class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-yellow-400 hover:bg-slate-600 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400"
                                        href="#" data-te-dropdown-item-ref>Dashboard</a>
                                </li>
                                <li>
                                    <a class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-yellow-400 hover:bg-slate-600 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400"
                                        href="{{ route('logout.perform') }}" data-te-dropdown-item-ref>Logout</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                @endauth
            </ul>
        </div>
    </nav>
</div>
<script>


    //function to make nav bar smaller when scrolling
    var w = document.documentElement.clientWidth || window.innerWidth;
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {

    if (w >= 768){
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.padding = "10px 8px";
        document.getElementById("navbar").style.backgroundColor = "rgba(234, 179, 8, .7)";
        document.getElementById("navbar").style.backdropFilter = "blur(20px)";
        document.getElementById("navbar").style.margin = "0px 0px";
        var link = document.getElementsByName("link");
        for (var i = 0 ; i < link.length; i++){
            link[i].style.color = "rgba(0, 0, 0, 1)";
        }

        document.getElementById("logo").style.width= ("70px");
    } else {
        var link = document.getElementsByName("link");
        for (var i = 0 ; i < link.length; i++){
            link[i].style.color = "rgba(0, 0, 0, 1)";
        }
        document.getElementById("navbar").style.padding = "11px 8px";
        document.getElementById("navbar").style.backgroundColor = "rgba(234, 179, 8, .3)";
        document.getElementById("navbar").style.backdropFilter = "blur(0)";
        document.getElementById("navbar").style.margin = "20px 0px";


        document.getElementById("logo").style.width= ("140px");


    }
    }

    }
    //changes color of navbar and child elements when hovering
    document.getElementById("navbar").onmouseover = function() {
        document.getElementById("navbar").style.backgroundColor = "rgba(234, 179, 8, 1)";
        document.getElementById("navbar").style.padding = "10px 8px";
        var link = document.getElementsByName("link");
        for (var i = 0 ; i < link.length; i++){
            link[i].style.color = "rgba(0, 0, 0, 1)";
        }




    }

    //changes color of navbar and child elements when not hovering
    document.getElementById("navbar").onmouseout = function() {
        var link = document.getElementsByName("link");
        for (var i = 0 ; i < link.length; i++){
            link[i].style.color = "rgba(0, 0, 0, 1)";
        }
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
            document.getElementById("navbar").style.backgroundColor = "rgba(234, 179, 8, .7)";
        }else{
            document.getElementById("navbar").style.backgroundColor = "rgba(234, 179, 8, .3)";
            document.getElementById("navbar").style.padding = "11px 8px";
        }
    }



    // Burger menus
    document.addEventListener('DOMContentLoaded', function() {
        // open
        const burger = document.querySelectorAll('.navbar-burger');
        const menu = document.querySelectorAll('.navbar-menu');

        if (burger.length && menu.length) {
            for (var i = 0; i < burger.length; i++) {
                burger[i].addEventListener('click', function() {
                    for (var j = 0; j < menu.length; j++) {
                        menu[j].classList.toggle('hidden');
                    }
                });
            }
        }

        // close
        const close = document.querySelectorAll('.navbar-close');
        const backdrop = document.querySelectorAll('.navbar-backdrop');

        if (close.length) {
            for (var i = 0; i < close.length; i++) {
                close[i].addEventListener('click', function() {
                    for (var j = 0; j < menu.length; j++) {
                        menu[j].classList.toggle('hidden');
                    }
                });
            }
        }

        if (backdrop.length) {
            for (var i = 0; i < backdrop.length; i++) {
                backdrop[i].addEventListener('click', function() {
                    for (var j = 0; j < menu.length; j++) {
                        menu[j].classList.toggle('hidden');
                    }
                });
            }
        }
    });
</script>
