<?php namespace FourteenFour\Basecamp\Client\Facades;

use Illuminate\Support\Facades\Facade;

class BasecampAuth extends Facade
{

    /**
     * Get the registered name of the component.
     *
     * @return string
     */
    protected static function getFacadeAccessor() {

        return 'basecamp.auth';

    }

}
