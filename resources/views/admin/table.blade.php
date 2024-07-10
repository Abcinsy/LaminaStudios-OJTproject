{{-- @php
    $keys = array_keys($creatives[0]);
@endphp --}}

@extends('admin.layout')

@section('title')
    {{ $title }}
@endsection

@section('style')
    <style>
        table,
        th,
        td {
            border: 1px solid black;
        }
    </style>
@endsection

@section('content')
    <div class="flex flex-col">
        @if ($message = Session::get('success'))
            <strong>{{$message}}</strong>
        @endif
        <a class="text-blue-500" href="{{ route('admin.'.strtolower($title).'.form') }}">Add {{ $title }}</a>
    </div>
    <table>
        <tr>
            @foreach ($columns as $column)
                <th>{{ $column }}</th>
            @endforeach
            <th>Actions</th>
        </tr>

        @foreach ($records as $record)
            <tr>
                @foreach ($record->getAttributes() as $col)
                    <td>{{$col}}</td>
                @endforeach
                <td class="px-4 flex gap-2">
                    <a href="{{ route('admin.'.strtolower($title).'.edit', ['id' => $record['id']]) }}">
                        @csrf
                        <button type="submit">
                            <i class="bi bi-pencil-fill text-xl text-blue-500"></i>
                        </button>
                    </a>
                    <form action="{{ route('admin.'.strtolower($title).'.delete') }}" method="POST">
                        @csrf
                        <input type="text" name="id" id="id" value="{{ $record['id'] }}" hidden>
                        <button type="submit">
                            <i class="bi bi-trash-fill text-xl text-red-500"></i>
                        </button>
                    </form>
                </td>
            </tr>
        @endforeach
    </table>

@endsection
