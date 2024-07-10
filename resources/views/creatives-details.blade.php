<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Creatives - {{ $creative['name'] }}</title>

    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
    @vite('resources/css/app.css')
    @vite('resources/js/app.js')

</head>
<body>
    <img class="w-96" src="{{ asset('storage/images/'.$creative['image_name']) }}" alt="{{ $creative['name'] }}">
    <p class="font-bold">{{ $creative['name'] }}</p>
    <p>{{ $creative['title'] }}</p>
    <p>{{ $creative['description'] }}</p>
</body>
</html>