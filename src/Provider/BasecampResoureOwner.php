<?php namespace FourteenFour\Basecamp\Client\Provider;

use League\OAuth2\Client\Provider\ResourceOwnerInterface;

class BasecampResourceOwner implements ResourceOwnerInterface {

    /**
     * Raw Response from Basecamp OAuth
     * @var Array
     */
    protected $response;


    /**
     * Create new Resource Owner
     * @param Array $response Raw Response from OAuth Server
     */
    public function __construct(array $response = []) {

        $this->response = $response;

    }


    public function getId() {

        return $this->response['identity']['id'];

    }


    public function getEmail() {

        return $this->response['identity']['email_address'];

    }


    public function getFirstName() {

        return $this->response['identity']['first_name'];

    }


    public function getLastName() {

        return $this->response['identity']['last_name'];

    }


    public function getAccounts() {

        return $this->response['accounts'];

    }


    public function toArray() {

        return $this->response;

    }

}
