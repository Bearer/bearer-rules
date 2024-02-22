<?php

# bearer:expected php_third_parties_sentry
$breadcrumb = new \Sentry\Breadcrumb(
    \Sentry\Breadcrumb::LEVEL_INFO,
    \Sentry\Breadcrumb::TYPE_DEFAULT,
    'auth',
    'Authenticated user',
    ['id' => $user->email]
);

# bearer:expected php_third_parties_sentry
\Sentry\addBreadcrumb($breadcrumb->withMetadata("id", $user->email));

\Sentry\configureScope(function ($scope): void {
# bearer:expected php_third_parties_sentry
  $scope->setContext('character', ['id' => $user->email]);
# bearer:expected php_third_parties_sentry
  $scope->setTag('id', $user->email);
});

function foo(\Sentry\State\Scope $scope): void {
# bearer:expected php_third_parties_sentry
  $scope->setContext('character', ['id' => $user->email]);
}

\Sentry\withScope(function (\Sentry\State\Scope $scope) use ($e): void {
# bearer:expected php_third_parties_sentry
    $scope->setContext('character', ['id' => $user->email]);
});

# bearer:expected php_third_parties_sentry
\Sentry\captureMessage($user->email);
