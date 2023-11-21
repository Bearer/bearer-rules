<?php

$client = Bugsnag\Client::make('YOUR-API-KEY-HERE');

class Test {
  function doSomething() {
    $this->bugsnag->leaveBreadcrumb($user->id);

    $this->container->get('bugsnag')->leaveBreadcrumb(
      'ok',
      \Bugsnag\Breadcrumbs\Breadcrumb::MANUAL_TYPE,
      ['foo' => $user->id]
    );
  }
}

$client->registerCallback(function ($report) {
    $report->setMetaData([
        'account' => [
            'id' => $user->id,
            'paying_customer' => true,
        ]
    ]);

    $report->setUser([
        'acid' => '123456',
        'id' => $user->id,
    ]);
});

$client->notifyError('ErrorType', $user->id);


$report = Bugsnag\Report::fromNamedError($config, "Error", $user->id);
$report->setUser(['id' => $user->id]);
