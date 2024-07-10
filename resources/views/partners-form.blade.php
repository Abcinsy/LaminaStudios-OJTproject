<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Partners - Add</title>
</head>
<body>
    @if ($message = Session::get('success'))
        <div class="alert alert-success alert-block">
            <strong>{{$message}}</strong>
        </div>

        {{-- <img src="{{ asset('storage/images/'.Session::get('image')) }}" /> --}}
    @endif
    <form method="POST" action="{{ route('admin.partners.' . $action) }}" enctype="multipart/form-data">
        @csrf
        @if($action == 'update')
        <input type="text" name="id" id="id" value="{{ $partner['id'] }}" hidden />
        @endif
        <label for="name">Name:</label>
        <input type="text" name="name" id="name" @isset($partner) value="{{ $partner['name'] }}" @endisset />
        <label for="image">Image:</label>
        <input type="file" class="form-control" name="image" />
        @isset($partner)
            <img src="{{ asset('storage/images/' . $partner['image_name']) }}" alt="{{ $partner['name'] }}">
            {{ $partner['image_name'] }}
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