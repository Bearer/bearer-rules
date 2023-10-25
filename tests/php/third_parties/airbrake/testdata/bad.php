<?php

$notifier = new Airbrake\Notifier([
    'projectId' => 12345,
    'projectKey' => 'abcdefg'
]);

Airbrake\Instance::set($notifier);

$notice = $notifier->buildNotice($error);
$notice["params"] = ["username" => $user->name];
$notice["params"]["username"] = $user->name;

$notice2 = Airbrake\Instance::buildNotice($error);
$notice2["params"]["username"] = $user->name;

$notifier->addFilter(function ($notice3) {
    $notice3['context']['user']['name'] = $user->name;
    $notice3['params']['email'] = $user->email;
    return $notice3;
});
