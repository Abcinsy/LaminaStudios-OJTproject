<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lamina Studios - Login</title>

    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
    @vite('resources/css/app.css')
    @vite('resources/css/auth-forms.css')
    @vite('resources/js/app.js')
</head>

<body class="text-stone-800 bg-stone-800 antialiased">
    <nav class="w-full flex flex-wrap items-center justify-between px-2 py-6 ">
        <div class="sm:container px-12 mx-auto flex flex-wrap items-center justify-between">
            <div class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                <a href="/">
                    <img class="h-auto w-20 cursor-pointer self-start"
                        src="http://www.laminastudios.com/assets/images/ls-logo-300resolution-153x128.png"
                        alt="...">
                </a>
            </div>
        </div>
    </nav>
    <main>
        <section class="absolute w-full h-full">
            <div class="sm:container mx-auto sm:px-4 h-full w-full">
                <div class="flex items-start justify-center h-full w-full">
                    <div class="w-full sm:h-auto sm:w-[28rem] sm:px-4">
                        <div
                            class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg sm:rounded-lg bg-gray-300 border-0">
                            <div class="rounded-t mb-0 px-6 py-6">
                                <div class="text-center mb-2">
                                    <h1 class="text-amber-500 text-xl font-extrabold drop-shadow">
                                        Please verify your email
                                    </h1>
                                </div>
                                <hr class="mt-6 border-b-1 border-gray-400" />
                            </div>
                            <div class="flex-auto px-4 lg:px-10 pb-5 text-center">
                                <p>An email has been sent to your email address.</p>
                                <b>({{ auth()->user()->email }})</b>
                                <p>Click the link in the email to verify your account and complete the registration process.</p>
                                <div class="mt-8">
                                    <p>Can't find the email?</p>
                                    <form method="post" action="{{ route('verification.send') }}" id="resend">
                                        @csrf
                                        <button class="bg-gray-900 text-white hover:bg-gray-700 text-sm font-bold uppercase px-6 py-3 mt-2 rounded shadow hover:shadow-lg outline-none focus:outline-none w-full" type="submit" form="resend" style="transition: all 0.15s ease 0s;">
                                            Resend Verification Email
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        @if(session('message'))
                        <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-green-100 border-2 border-green-400 text-green-700 text-center py-2">
                            <p class="font-semibold">{{ session('message') }}</p>
                        </div>
                        @endif
                    </div>
                </div>
            </div>
            @include('home.sections.footer')
        </section>
    </main> 
</body>
<script>
    function toggleNavbar(collapseID) {
        document.getElementById(collapseID).classList.toggle("hidden");
        document.getElementById(collapseID).classList.toggle("block");
    }
</script>

</html>