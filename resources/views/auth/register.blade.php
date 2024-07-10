<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lamina Studios - Register</title>

    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
    @vite('resources/css/app.css')
    @vite('resources/css/auth-forms.css')
    @vite('resources/js/app.js')
</head>

<body class="text-stone-800 bg-stone-800 antialiased">
    {{-- <div class="circle"></div> --}}
    <nav class="w-full flex flex-wrap items-center justify-between px-2 py-6 ">
        <div class="sm:container px-12 mx-auto flex flex-wrap items-center justify-between">
            <div class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                <a href="/">
                    <img class="h-auto w-20 cursor-pointer self-start" src="http://www.laminastudios.com/assets/images/ls-logo-300resolution-153x128.png" alt="...">
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
                            <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
                                <div class="text-gray-700 text-center mt-8 mb-3 font-bold">
                                    <h1 class="text-amber-500 text-xl font-extrabold drop-shadow">
                                        Register to Lamina Studios
                                    </h1>
                                    <hr class="mt-6 border-b-1 border-gray-400" />
                                </div>
                                <form method="post" action="{{ route('register.perform') }}" id="register">
                                    @csrf
                                    <div class="relative z-0 w-full mb-6">
                                        <input type="email" name="email" value="{{ old('email') }}" class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-500" placeholder=" " required style="transition: all 0.15s ease 0s;" />
                                        <label class="absolute duration-300 top-3 -z-1 origin-0 uppercase text-gray-500 text-xs font-bold mb-2" for="email">Email</label>
                                    </div>
                                    <div class="relative z-0 w-full mb-6">
                                        <input type="text" name="username" value="{{ old('username') }}" class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-500" placeholder=" " required style="transition: all 0.15s ease 0s;" />
                                        <label class="absolute duration-300 top-3 -z-1 origin-0 uppercase text-gray-500 text-xs font-bold mb-2" for="username">Username</label>
                                    </div>
                                    <div class="relative z-0 w-full mb-6">
                                        <input type="password" name="password" value="{{ old('password') }}" class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-500" placeholder=" " required style="transition: all 0.15s ease 0s;" />
                                        <label class="absolute duration-300 top-3 -z-1 origin-0 uppercase text-gray-500 text-xs font-bold mb-2" for="password">Password</label>
                                    </div>
                                    <div class="relative z-0 w-full mb-6">
                                        <input type="password" name="password_confirmation" value="{{ old('password_confirmation') }}" class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-500" placeholder=" " required style="transition: all 0.15s ease 0s;" />
                                        <label class="absolute duration-300 top-3 -z-1 origin-0 uppercase text-gray-500 text-xs font-bold mb-2" for="password_confirmation">Confirm Password</label>
                                    </div>
                                    <div class="text-center mt-6">
                                        <button class="bg-gray-900 text-white hover:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-4 w-full" type="submit" form="register" style="transition: all 0.15s ease 0s;">
                                            Register
                                        </button>
                                        <a href="{{ route('login.show') }}" class="bg-gray-100 text-gray-900 hover:bg-gray-200 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-4 w-full cursor-pointer" type="button" style="transition: all 0.15s ease 0s;">
                                            Already have an account?
                                        </a>
                                    </div>
                                </form>
                            </div>
                        </div>
                        @if (isset($errors) && count($errors) > 0)
                            <div class="alert alert-warning text-center text-sm bg-red-100 border-2 border-red-400 text-red-700 py-2 rounded-md mb-6"
                                role="alert">
                                <ul class="list-unstyled mb-0">
                                    @foreach ($errors->all() as $error)
                                        <li>{{ $error }}</li>
                                    @endforeach
                                </ul>
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