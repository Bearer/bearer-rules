<?php

$client = Bugsnag\Client::make('YOUR-API-KEY-HERE');

class Test {
  function doSomething() {
    $this->bugsnag->leaveBreadcrumb($user->email);

    $this->container->get('bugsnag')->leaveBreadcrumb(
      'ok',
      \Bugsnag\Breadcrumbs\Breadcrumb::MANUAL_TYPE,
      ['foo' => $user->email]
    );
  }
}

$client->registerCallback(function ($report) {
    $report->setMetaData([
        'account' => [
            'email' => $user->email,
            'paying_customer' => true,
        ]
    ]);

    $report->setUser([
        'acid' => '123456',
        'email' => $user->email,
    ]);
});

$client->notifyError('ErrorType', $user->email);


$report = Bugsnag\Report::fromNamedError($config, "Error", $user->email);
$report->setUser(['email' => $user->email]);
