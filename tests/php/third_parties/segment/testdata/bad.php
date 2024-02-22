<?php

use Segment\Segment;

# bearer:expected php_third_parties_segment
Segment::identify(["id" => $user->email]);
# bearer:expected php_third_parties_segment
Segment::track(["id" => $user->email]);
# bearer:expected php_third_parties_segment
Segment::page(["id" => $user->email]);
# bearer:expected php_third_parties_segment
Segment::group([
  "traits" => array(
    "id" => $user->email
  )
]);

# bearer:expected php_third_parties_segment
Segment::alias([
  "previousId" => "anonymous_user",
  "userId" => $user->email
]);
