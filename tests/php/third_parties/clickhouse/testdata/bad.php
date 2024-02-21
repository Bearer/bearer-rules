<?php

$db = new ClickHouseDB\Client(['config_array']);

# bearer:expected php_third_parties_clickhouse
$stat = $db->insert('summing_url_views',
    [
        [time(), $user->email],
    ],
    ['event_time', 'id']
);
