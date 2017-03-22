<?php namespace FourteenFour\BasecampAuth;

use Illuminate\Support\ServiceProvider;
use FourteenFour\BasecampAuth\Provider\Basecamp;

class BasecampAuthServiceProvider extends ServiceProvider {

    /**
     * Indicates if loading of the provider is deferred.
     *
     * @var bool
     */
    protected $defer = true;

    /**
     * Register bindings in the container.
     *
     * @return void
     */
    public function register() {

        $this->app->singleton('basecamp.auth', function ($app) {

            $config = $this->getConfig();

            return new Basecamp( $config );

        });

        $this->app->alias('basecamp.auth', 'FourteenFour\BasecampAuth\Provider\Basecamp');

    }

    /**
     * Perform post-registration booting of services.
     *
     * @return void
     */
    public function boot() {

        $this->publishes([
            __DIR__ . '/config/basecamp_auth.php' => config_path('basecamp_auth.php'),
        ], 'config');

    }

    private function getConfig() {
        $config = $this->app['config']->get('basecamp_auth');

        if (filter_var($config['redirectUri'], FILTER_VALIDATE_URL) === FALSE) {
            $config['redirectUri'] = url($config['redirectUri']);
        }

        return $config;
    }

    /**
     * Define defered binds so laravel can return to it.
     * @return Array Strings of registered binds for Laravel IOC
     */
    public function provides() {
        return [
            'basecamp.auth',
        ];
    }

}
