<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
            {{-- <meta http-equiv="Content-Security-Policy" --}}
    {{-- content="default-src 'self' https://sockjs-ap1.pusher.com/ blob: ; script-src  'self' data:; style-src data: 'self'; img-src 'self' data: blob: https://uicdn.toast.com/; font-src 'self' https://fonts.googleapis.com/ https://fonts.gstatic.com/; connect-src 'self'; frame-src 'self'; object-src 'none'; media-src 'self'; child-src 'self' youtube.com; form-action 'self'; frame-ancestors 'self'; base-uri 'self';"> --}}

        <title>Sumet hongnak</title>
        <link href="{{ asset('scss/app.scss') }}" rel="stylesheet">
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Prompt:wght@100;200;300;400;500;600&display=swap" rel="stylesheet">
        <!-- Styles -->
        <style>
        </style>

        <style>
            body {
                font-family: 'thsarabunnew','Prompt', sans-serif;
            }
        </style>
    </head>
    <body>
       <div id="root"></div>
       <script src="{{ mix('/js/app.js') }}"></script>
    </body>
</html>
