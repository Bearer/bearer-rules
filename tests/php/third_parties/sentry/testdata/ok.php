<?php

$breadcrumb = new \Sentry\Breadcrumb(
    \Sentry\Breadcrumb::LEVEL_INFO,
    \Sentry\Breadcrumb::TYPE_DEFAULT,
    'auth',
    'Authenticated user',
    ['id' => $user->id]
);

\Sentry\addBreadcrumb($breadcrumb->withMetadata("id", $user->id));

\Sentry\configureScope(function ($scope): void {
  $scope->setContext('character', ['id' => $user->id]);
  $scope->setTag('id', $user->id);
});

function foo(\Sentry\State\Scope $scope): void {
  $scope->setContext('character', ['id' => $user->id]);
}

\Sentry\withScope(function (\Sentry\State\Scope $scope) use ($e): void {
    $scope->setContext('character', ['id' => $user->id]);
});

\Sentry\captureMessage($user->id);
