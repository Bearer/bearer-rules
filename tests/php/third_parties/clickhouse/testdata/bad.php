<?php

$db = new ClickHouseDB\Client(['config_array']);

$stat = $db->insert('summing_url_views',
    [
        [time(), $user->email],
    ],
    ['event_time', 'id']
);
