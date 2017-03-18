<?php namespace FourteenFour\Basecamp\Client\Provider;

use League\OAuth2\Client\Provider\ResourceOwnerInterface;

class BasecampResourceOwner implements ResourceOwnerInterface {

    /**
     * Raw Response from Basecamp OAuth
     *
     * @var Array
     */
    protected $response;

    /**
     * Create new Resource Owner
     *
     * @param Array $response Raw Response from OAuth Server
     */
    public function __construct(array $response = []) {

        $this->response = $response;

    }

    /**
     * Returns the Resource Owner's ID
     *
     * @return string|integer Resource Owner's Basecamp ID
     */
    public function getId() {

        return $this->response['identity']['id'];

    }

    /**
     * Returns the Resource Owner's Email
     *
     * @return string Resource Owner's Email
     */
    public function getEmail() {

        return $this->response['identity']['email_address'];

    }

    /**
     * Returns the Resource Owner's First Name
     *
     * @return string Resource Owner's First Name
     */
    public function getFirstName() {

        return $this->response['identity']['first_name'];

    }

    /**
     * Returns the Resource Owner's Last Name
     *
     * @return string Resource Owner's Last Name
     */
    public function getLastName() {

        return $this->response['identity']['last_name'];

    }

    /**
     * Returns the Resource Owner's Accounts
     *
     * @return array Resource Owner's Accoutns
     */
    public function getAccounts() {

        return $this->response['accounts'];

    }

    /**
     * Array of the response from the Resource Owner
     *
     * @return array Response for Resource Owner
     */
    public function toArray() {

        return $this->response;

    }

}
