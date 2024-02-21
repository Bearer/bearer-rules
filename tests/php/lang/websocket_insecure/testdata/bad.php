<?php
$host = 'example.com';
# bearer:expected php_lang_websocket_insecure
$client = new WebSocket\Client("ws://example.com");
# bearer:expected php_lang_websocket_insecure
$client = new WebSocket('ws://'.$host);
?>