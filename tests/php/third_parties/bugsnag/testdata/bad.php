<?php

$client = Bugsnag\Client::make('YOUR-API-KEY-HERE');

class Test {
  function doSomething() {
# bearer:expected php_third_parties_bugsnag
    $this->bugsnag->leaveBreadcrumb($user->email);

# bearer:expected php_third_parties_bugsnag
    $this->container->get('bugsnag')->leaveBreadcrumb(
      'ok',
      \Bugsnag\Breadcrumbs\Breadcrumb::MANUAL_TYPE,
      ['foo' => $user->email]
    );
  }
}

$client->registerCallback(function ($report) {
# bearer:expected php_third_parties_bugsnag
    $report->setMetaData([
        'account' => [
            'email' => $user->email,
            'paying_customer' => true,
        ]
    ]);

# bearer:expected php_third_parties_bugsnag
    $report->setUser([
        'acid' => '123456',
        'email' => $user->email,
    ]);
});

# bearer:expected php_third_parties_bugsnag
$client->notifyError('ErrorType', $user->email);


# bearer:expected php_third_parties_bugsnag
$report = Bugsnag\Report::fromNamedError($config, "Error", $user->email);
# bearer:expected php_third_parties_bugsnag
$report->setUser(['email' => $user->email]);
