<?php

$notifier = new Airbrake\Notifier([
    'projectId' => 12345,
    'projectKey' => 'abcdefg'
]);

Airbrake\Instance::set($notifier);

$notice = $notifier->buildNotice($error);
$notice["params"] = ["username" => $user->id];
$notice["params"]["username"] = $user->id;

$notice2 = Airbrake\Instance::buildNotice($error);
$notice2["params"]["username"] = $user->id;

$notifier->addFilter(function ($notice3) {
    $notice3['context']['user']['name'] = $user->id;
    $notice3['params']['email'] = $user->id;
    return $notice3;
});
