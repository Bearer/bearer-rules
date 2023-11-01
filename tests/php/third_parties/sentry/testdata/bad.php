<?php

$breadcrumb = new \Sentry\Breadcrumb(
    \Sentry\Breadcrumb::LEVEL_INFO,
    \Sentry\Breadcrumb::TYPE_DEFAULT,
    'auth',
    'Authenticated user',
    ['id' => $user->email]
);

\Sentry\addBreadcrumb($breadcrumb->withMetadata("id", $user->email));

\Sentry\configureScope(function ($scope): void {
  $scope->setContext('character', ['id' => $user->email]);
  $scope->setTag('id', $user->email);
});

function foo(\Sentry\State\Scope $scope): void {
  $scope->setContext('character', ['id' => $user->email]);
}

\Sentry\withScope(function (\Sentry\State\Scope $scope) use ($e): void {
    $scope->setContext('character', ['id' => $user->email]);
});

\Sentry\captureMessage($user->email);
