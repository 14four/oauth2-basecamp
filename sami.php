<?php

$dir = __DIR__ . '/src';

$iterator = Symfony\Component\Finder\Finder::create()
    ->files()
    ->name('*.php')
    ->exclude('public')
    ->exclude('resources')
    ->in($dir);

$options = [
    'theme'                => 'default',
    'title'                => 'OAuth2 Basecamp Documentation',
    'build_dir'            => __DIR__ . '/docs/api/',
    'cache_dir'            => __DIR__ . '/cache/sami/',
];

$sami = new Sami\Sami($iterator, $options);

return $sami;
