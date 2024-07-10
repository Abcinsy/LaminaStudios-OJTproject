@extends('layouts.layout')
@section('title')
    Home
@endsection

@section('content')
    @include('home.sections.hero')
    @include('home.sections.news')
    @include('home.sections.events')
    @include('home.sections.blogs')
    @include('home.sections.about-us')
    @include('home.sections.creatives')
    @include('home.sections.features-creative')
    @include('home.sections.initiatives')
    @include('home.sections.games')
    @include('home.sections.partners')
    @include('home.sections.devs')
    @include('home.sections.contact-us')
@endsection

@section('scripts')
    <script>
        function toggleNavbar(collapseID) {
            document.getElementById(collapseID).classList.toggle("hidden");
            document.getElementById(collapseID).classList.toggle("block");
        }
    </script>

    <script>
        document.getElementById("scroll-btn").addEventListener("click", function() {
            const targetSection = document.getElementById("devs");
            const targetPosition = targetSection.offsetTop;
            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });
        });
    </script>
@endsection
