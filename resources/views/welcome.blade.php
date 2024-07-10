<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Lamina Studio</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />
        @vite('resources/css/app.css')
        @vite('resources/js/app.js')
    </head>
    <body class="bg-stone-700">
        <nav
          class="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 "
        >
          <div
            class="container px-4 mx-auto flex flex-wrap items-center justify-between"
          >
            @include('nav')
            @include('hero')

          </div>
        </nav>

      </body>
      <script>
        function toggleNavbar(collapseID) {
          document.getElementById(collapseID).classList.toggle("hidden");
          document.getElementById(collapseID).classList.toggle("block");
        }
      </script>


</html>
