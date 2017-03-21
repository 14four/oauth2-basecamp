<?php namespace FourteenFour\BasecampAuth\Provider;

use League\OAuth2\Client\Provider\AbstractProvider;
use League\OAuth2\Client\Provider\Exception\IdentityProviderException;
use League\OAuth2\Client\Token\AccessToken;
use League\OAuth2\Client\Tool\BearerAuthorizationTrait;
use Psr\Http\Message\ResponseInterface;

class Basecamp extends AbstractProvider {

    use BearerAuthorizationTrait;

    /**
     * Returns the Authorization URL used for
     *
     * @return string URL Basecamp for authorization.
     */
    public function getBaseAuthorizationUrl() {

        return 'https://launchpad.37signals.com/authorization/new';

    }

    /**
     * Returns authorization parameters based on provided options.
     *
     * @param array $options
     * @return array Authorization parameters
     */
    protected function getAuthorizationParameters(array $options) {

        $defaultOptiosn = [
            'type' => 'web_server'
        ];

        $newOptions = array_merge($defaultOptiosn, $options);

        // dd($newOptions);

        return parent::getAuthorizationParameters( $newOptions );

    }

    /**
     * Returns the base URL for requesting an access token.
     *
     * @param array $params
     * @return array URL to Basecamp Authorization Token
     */
    public function getBaseAccessTokenUrl(array $params) {

        return 'https://launchpad.37signals.com/authorization/token';

    }

    /**
     * Requests an access token using a specified grant and option set.
     *
     * @param mixed $grant
     * @param array $options
     * @return AccessToken Returns access token
     */
    public function getAccessToken($grant, array $options = []) {

        $defaultOptiosn = [
            'type' => 'web_server'
        ];

        $newOptions = array_merge($defaultOptiosn, $options);

        return parent::getAccessToken( $grant, $newOptions );
    }

    /**
     * Requests resource owner details.
     *
     * @param AccessToken $token Resource Owner URL
     * @return string      URL To resource owner information
     */
    public function getResourceOwnerDetailsUrl(AccessToken $token) {

        return 'https://launchpad.37signals.com/authorization.json';

    }

    /**
     * Return default scope for requests
     *
     * @return array Default Query Scope
     */
    protected function getDefaultScopes() {

        return [];

    }

    /**
     * Checks a provider response for errors.
     *
     * @throws IdentityProviderException
     * @param ResponseInterface $response
     * @param array|string $data Parsed response data
     * @return void
     */
    protected function checkResponse(ResponseInterface $response, $data) {

        foreach( $response as $key => $value ) {
            if ( $key == 'error' ) {
                throw new IdentityProviderException($value, $response->getStatusCode(), $response);
            }
        }

    }

    /**
     * Generates a resource owner object from a successful resource owner
     * details request.
     *
     * @param  array $response
     * @param  AccessToken $token
     * @return ResourceOwnerInterface
     */
    protected function createResourceOwner(array $response, AccessToken $token) {

        return new BasecampResourceOwner( $response );

    }

}
