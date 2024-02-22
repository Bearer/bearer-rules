<?php

use function Symfony\Component\DependencyInjection\Loader\Configurator\env;
use Symfony\Component\DependencyInjection\Loader\Configurator\ContainerConfigurator;

return static function (ContainerConfigurator $container): void {
    $container->extension('framework', [
        'mailer' => [
# bearer:expected php_symfony_insecure_smtp
            'dsn' => "foo+smtp://wherever?verify_peer=0",
        ],
    ]);
};
