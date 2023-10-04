<?php

use Illuminate\Support\Facades\Http;

Http::get($url);
Http::retry(3, 100)->get($url);

$options = ["verify" => true];

Http::withOptions($options)->get($url);
Http::retry(3, 100)->withOptions($options)->get($url);
