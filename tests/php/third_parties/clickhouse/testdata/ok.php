<?php

$db = new ClickHouseDB\Client(['config_array']);

$stat = $db->insert('summing_url_views',
    [
        [time(), $user->id],
    ],
    ['event_time', 'id']
);
