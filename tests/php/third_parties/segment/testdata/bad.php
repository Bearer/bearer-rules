<?php

use Segment\Segment;

Segment::identify(["id" => $user->email]);
Segment::track(["id" => $user->email]);
Segment::page(["id" => $user->email]);
Segment::group([
  "traits" => array(
    "id" => $user->email
  )
]);

Segment::alias([
  "previousId" => "anonymous_user",
  "userId" => $user->email
]);
