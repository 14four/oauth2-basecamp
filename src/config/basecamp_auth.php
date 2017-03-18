<?php

return [

    /*
    |--------------------------------------------------------------------------
    | CLIENT ID
    |--------------------------------------------------------------------------
    |
    | The client Identifier provided by basecamp. Visit Bassecamp Integrate
    | to generate your Client ID https://integrate.37signals.com/
    |
     */
    'clientId' => env('BASECAMP_CLIENT_ID'),


    /*
    |--------------------------------------------------------------------------
    | CLIENT SECRET
    |--------------------------------------------------------------------------
    |
    | The client Secret provided by basecamp. Visit Bassecamp Integrate
    | to generate your Client ID https://integrate.37signals.com/
    |
     */
    'clientSecret' => env('BASECAMP_CLIENT_SECRET'),


    /*
    |--------------------------------------------------------------------------
    | REDIRECT URL
    |--------------------------------------------------------------------------
    |
    | The redirect URL that basecamp will repsond to. Must match your App
    | configuration at Basecamp https://integrate.37signals.com/
    |
     */
    'redirectUri' => url('/basecamp-redirect-uri'),

];
