# Basecamp OAuth 2.0 Client Provider

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Provide Basecamp OAuth 2.0 client support for PHP using [League OAuth2 Client](https://github.com/thephpleague/oauth2-client).


## Installation

Use composer to install

```bash
composer require 14four/oauth2-basecamp
```

## Configure Laravel

### Setup Service Provider

Add the service provider to the `config/app.php` file.

```php
<?php
  //...
  'providers' => [
    //...
    FourteenFour\Basecamp\Client\BasecampAuthServiceProvider::class,
  ],
  //...
```

### Setup Aliases

Add the facade to the `config/app.php` file.


```php
<?php
  //...
  'aliases' => [
    //...
    'BasecampAuth' => FourteenFour\Basecamp\Client\Provider\Basecamp::class,
  ],
  //...
```

### Setup config

Move and configure the config file. Visit [basecamp](https://integrate.37signals.com/) to generate your application credentials.

```bash
php artisan --tag=config
```

Now configure the config file. It's recommended that you use the `.env` file for your Client ID and Client Secret.

```
BASECAMP_CLIENT_ID=
BASECAMP_CLIENT_SECRET=
```

*Note:* Your Redirect URI must match exactly how it's represented in (Basceamp)[https://integrate.37signals.com/]

## Usage

To use Basecamp OAuth you will need to use the `FourteenFour\Basecamp\Client\Provider\Basecamp` class.

```php
<?php

$provider = new \FourteenFour\Basecamp\Client\Provider\Basecamp([
    'clientId' => '{your-basecamp-client-id}',
    'clientSecret' => '{your-basecamp-client-secret}',
    'redirectUri' => '{your-callback-url}',
]);

if (!isset($_GET['code'])) {

    // If we don't have an authorization code then get one
    $authUrl = $provider->getAuthorizationUrl();
    $_SESSION['oauth2state'] = $provider->getState();
    header('Location: '.$authUrl);
    exit;

// Check given state against previously stored one to mitigate CSRF attack
} else if (empty($_GET['state']) || ($_GET['state'] !== $_SESSION['oauth2state'])) {

    unset($_SESSION['oauth2state']);
    exit('Invalid state');

} else {

    // Try to get an access token (using the authorization code grant)
    $token = $provider->getAccessToken('authorization_code', [
        'code' => $_GET['code']
    ]);

    // Optional: Now you have a token you can look up a users profile data
    try {

        // We got an access token, let's now get the user's details
        $user = $provider->getResourceOwner($token);

        // Use these details to create a new profile
        printf('Hello %s!', $user->getId());

    } catch (Exception $e) {

        // Failed to get user details
        exit('Oh dear...');
    }

    // Use this to interact with an API on the users behalf
    echo $token->getToken();
}

```

### Laravel

Here is an example controller for you to start with.

```php
<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use BasecampAuth;

class BasecampAuthController extends Controller
{

    public function auth( BasecampAuth $client ) {

        $authorizationUrl = $client->getAuthorizationUrl();

        $_SESSION['oauth2state'] = $client->getState();

        header('Location: ' . $authorizationUrl);
        exit;

    }


    public function login( Request $request, BasecampAuth $client ) {

        if (empty($request->state) || (isset($_SESSION['oauth2state']) && $request->state !== $_SESSION['oauth2state'])) {

            if (isset($_SESSION['oauth2state'])) {
                unset($_SESSION['oauth2state']);
            }

            exit('Invalid state');

        }

        $accessToken = $client->getAccessToken('authorization_code', ['code' => $request->code]);

        $resourceOwner = $client->getResourceOwner( $accessToken );

        dd( $resourceOwner );

    }

}
```

## Generating Documentation

Get Sami (only required once).

```bash
composer run-script getsami
```

Run Sami

```bash
omposer run-script docs
```
