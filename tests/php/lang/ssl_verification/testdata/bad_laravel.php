<?php

use Illuminate\Support\Facades\Http;

Http::withoutVerifying()->get($url);
Http::retry(3, 100)->withoutVerifying()->get($url);

$options = ["verify" => false];

Http::withOptions($options)->get($url);
Http::retry(3, 100)->withOptions($options)->get($url);
