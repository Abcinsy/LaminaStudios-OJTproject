<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Lamina Studio - @yield('title')</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
    @vite('resources/css/app.css')
    @vite('resources/js/app.js')


<body class="bg-neutral-100">

    <header>
        @include('home.sections.nav')
    </header>

    <main>
        <div class="flex flex-col relative gap-40 ">
            @yield('content')
        </div>
    </main>

    @include('home.sections.footer')

    @yield('scripts')
</body>
</html>
