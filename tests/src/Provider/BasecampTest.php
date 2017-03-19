<?php namespace FourteenFour\Basecamp\Client\Test\Provider;

use Orchestra\Testbench\TestCase;
use League\OAuth2\Client\Tool\QueryBuilderTrait;
use Mockery as m;

class BasecampTestCase extends TestCase
{

    use QueryBuilderTrait;

    protected $provider;

    protected function setUp()
    {
        $this->provider = new \FourteenFour\Basecamp\Client\Provider\Basecamp([
            'clientId' => 'mock_client_id',
            'clientSecret' => 'mock_client_secret',
            'redirectUri' => 'redirect_url',
        ]);
    }

    public function tearDown()
    {
        m::close();
        parent::tearDown();
    }

    public function testAuthorizationUrl()
    {
        $url = $this->provider->getAuthorizationUrl();
        $uri = parse_url($url);
        parse_str($uri['query'], $query);
        $this->assertArrayHasKey('client_id', $query);
        $this->assertArrayHasKey('redirect_uri', $query);
        $this->assertArrayHasKey('state', $query);
        $this->assertArrayHasKey('scope', $query);
        $this->assertArrayHasKey('response_type', $query);
        $this->assertArrayHasKey('approval_prompt', $query);
        $this->assertNotNull($this->provider->getState());
    }
    public function testScopes()
    {
        $scopeSeparator = ',';
        $options = ['scope' => [uniqid(), uniqid()]];
        $query = ['scope' => implode($scopeSeparator, $options['scope'])];
        $url = $this->provider->getAuthorizationUrl($options);
        $encodedScope = $this->buildQueryString($query);
        $this->assertContains($encodedScope, $url);
    }
    public function testGetAuthorizationUrl()
    {
        $url = $this->provider->getAuthorizationUrl();
        $uri = parse_url($url);
        $this->assertEquals('/authorization/new', $uri['path']);
    }
    public function testGetBaseAccessTokenUrl()
    {
        $params = [];
        $url = $this->provider->getBaseAccessTokenUrl($params);
        $uri = parse_url($url);
        $this->assertEquals('/authorization/token', $uri['path']);
    }
    public function testGetAccessToken()
    {
        $response = m::mock('Psr\Http\Message\ResponseInterface');
        $response->shouldReceive('getBody')->andReturn('{"access_token": "mock_access_token","scopes": "account","expires_in": 3600,"refresh_token": "mock_refresh_token","token_type": "bearer"}');
        $response->shouldReceive('getHeader')->andReturn(['content-type' => 'json']);
        $client = m::mock('GuzzleHttp\ClientInterface');
        $client->shouldReceive('send')->times(1)->andReturn($response);
        $this->provider->setHttpClient($client);
        $token = $this->provider->getAccessToken('authorization_code', ['code' => 'mock_authorization_code']);
        $this->assertEquals('mock_access_token', $token->getToken());
        $this->assertLessThanOrEqual(time() + 3600, $token->getExpires());
        $this->assertGreaterThanOrEqual(time(), $token->getExpires());
        $this->assertEquals('mock_refresh_token', $token->getRefreshToken());
        $this->assertNull($token->getResourceOwnerId());
    }

    public function testUserData()
    {
        $userId = rand(1000,9999);
        $email_address = uniqid();
        $first_name = uniqid();
        $last_name = uniqid();
        $username = uniqid();
        $location = uniqid();

        $accountID = uniqid();
        $accountName = uniqid();
        $accountProduct = uniqid();
        $accountHref = uniqid();
        $accountAppHref = uniqid();

        $postResponse = m::mock('Psr\Http\Message\ResponseInterface');
        $postResponse->shouldReceive('getBody')->andReturn('{"access_token": "mock_access_token","scopes": "account","expires_in": 3600,"refresh_token": "mock_refresh_token","token_type": "bearer"}');
        $postResponse->shouldReceive('getHeader')->andReturn(['content-type' => 'json']);
        $userResponse = m::mock('Psr\Http\Message\ResponseInterface');
        $userResponse->shouldReceive('getBody')->andReturn('{
            "expires_at": "2021-12-20T16:34:07.132459+00:00",
            "identity": {
                "id": "'.$userId.'",
                "email_address": "'.$email_address.'",
                "first_name": "'.$first_name.'",
                "last_name": "'.$last_name.'"
            },
            "accounts": [
                {
                    "id": "'.$accountID.'",
                    "name": "'.$accountName.'",
                    "product": "'.$accountProduct.'",
                    "href": "'.$accountHref.'",
                    "app_href": "'.$accountAppHref.'"
                }
            ]
        }');

        $userResponse->shouldReceive('getHeader')->andReturn(['content-type' => 'json']);
        $client = m::mock('GuzzleHttp\ClientInterface');
        $client->shouldReceive('send')
            ->times(2)
            ->andReturn($postResponse, $userResponse);
        $this->provider->setHttpClient($client);
        $token = $this->provider->getAccessToken('authorization_code', ['code' => 'mock_authorization_code']);
        $user = $this->provider->getResourceOwner($token);

        $this->assertEquals($userId, $user->getId());
        $this->assertEquals($userId, $user->toArray()['identity']['id']);
        $this->assertEquals($first_name, $user->getFirstName());
        $this->assertEquals($first_name, $user->toArray()['identity']['first_name']);
        $this->assertEquals($last_name, $user->getLastName());
        $this->assertEquals($last_name, $user->toArray()['identity']['last_name']);
        $this->assertEquals($email_address, $user->getEmail());
        $this->assertEquals($email_address, $user->toArray()['identity']['email_address']);

        $this->assertEquals(1, count($user->getAccounts()));
        $this->assertEquals(1, count($user->toArray()['accounts']));
    }

}
