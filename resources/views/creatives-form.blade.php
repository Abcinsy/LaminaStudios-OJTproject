<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Lamina Studios - Admin</title>
</head>

<body>
    @if ($message = Session::get('success'))
        <div class="alert alert-success alert-block">
            <strong>{{ $message }}</strong>
        </div>

        {{-- <img src="{{ asset('storage/images/'.Session::get('image')) }}" /> --}}
    @endif
    <form class="flex fle-col" method="POST" action="{{ route('admin.creatives.' . $action) }}" enctype="multipart/form-data">
        @csrf
        @if($action == 'update')
        <input type="text" name="id" id="id" value="{{ $creative['id'] }}" hidden />
        @endif
        <label for="name">Name:</label>
        <input type="text" name="name" id="name"
            @isset($creative) value="{{ $creative['name'] }}" @endisset />
        <label for="title">Title:</label>
        <input type="text" name="title" id="title"
            @isset($creative) value="{{ $creative['title'] }}" @endisset />
        <label for="description">Description:</label>
        <input type="text" name="description" id="description"
            @isset($creative) value="{{ $creative['description'] }}" @endisset />
        <label for="image">Image:</label>
        <input type="file" class="form-control" name="image" />
        @isset($creative)
            <img src="{{ asset('storage/images/' . $creative['image_name']) }}" alt="{{ $creative['name'] }}">
            {{ $creative['image_name'] }}
        @endisset
        
        <button type="submit" class="btn btn-sm">Upload</button>
        
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
    </form>
</body>

</html>
