<?php

$notifier = new Airbrake\Notifier([
    'projectId' => 12345,
    'projectKey' => 'abcdefg'
]);

Airbrake\Instance::set($notifier);

$notice = $notifier->buildNotice($error);
# bearer:expected php_third_parties_airbrake
$notice["params"] = ["username" => $user->name];
# bearer:expected php_third_parties_airbrake
$notice["params"]["username"] = $user->name;

$notice2 = Airbrake\Instance::buildNotice($error);
# bearer:expected php_third_parties_airbrake
$notice2["params"]["username"] = $user->name;

$notifier->addFilter(function ($notice3) {
# bearer:expected php_third_parties_airbrake
    $notice3['context']['user']['name'] = $user->name;
# bearer:expected php_third_parties_airbrake
    $notice3['params']['email'] = $user->email;
    return $notice3;
});
