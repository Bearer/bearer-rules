<?php

use Segment\Segment;

Segment::identify(["id" => $user->id]);
Segment::track(["id" => $user->id]);
Segment::page(["id" => $user->id]);
Segment::group([
  "traits" => array(
    "id" => $user->id
  )
]);

Segment::alias([
  "previousId" => "anonymous_user",
  "userId" => $user->id
]);
