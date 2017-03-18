<?php namespace FourteenFour\Basecamp\Client\Provider;

use League\OAuth2\Client\Provider\AbstractProvider;
use League\OAuth2\Client\Provider\Exception\IdentityProviderException;
use League\OAuth2\Client\Token\AccessToken;
use League\OAuth2\Client\Tool\BearerAuthorizationTrait;
use Psr\Http\Message\ResponseInterface;

class Basecamp extends AbstractProvider {

    use BearerAuthorizationTrait;


    public function getBaseAuthorizationUrl() {

        return 'https://launchpad.37signals.com/authorization/new';

    }


    protected function getAuthorizationParameters(array $options) {

        $defaultOptiosn = [
            'type' => 'web_server'
        ];

        $newOptions = array_merge($defaultOptiosn, $options);

        // dd($newOptions);

        return parent::getAuthorizationParameters( $newOptions );

    }


    public function getBaseAccessTokenUrl(array $params) {

        return 'https://launchpad.37signals.com/authorization/token';

    }


    public function getAccessToken($grant, array $options = []) {

        $defaultOptiosn = [
            'type' => 'web_server'
        ];

        $newOptions = array_merge($defaultOptiosn, $options);

        return parent::getAccessToken( $grant, $newOptions );
    }


    public function getResourceOwnerDetailsUrl(AccessToken $token) {

        return 'https://launchpad.37signals.com/authorization.json';

    }


    protected function getDefaultScopes() {

        return [];

    }


    protected function checkResponse(ResponseInterface $response, $data) {

        foreach( $response as $key => $value ) {
            if ( $key == 'error' ) {
                throw new IdentityProviderException($value, $response->getStatusCode(), $response);
            }
        }

    }


    protected function createResourceOwner(array $response, AccessToken $token) {

        return new BasecampResourceOwner( $response );

    }



}
