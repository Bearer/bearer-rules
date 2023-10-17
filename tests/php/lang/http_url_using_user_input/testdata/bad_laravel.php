<?php

use Illuminate\Support\Facades\Http;

$user_input = "http://{$_GET['host']}";

Http::head($user_input, []);
Http::get($user_input, []);
Http::post($user_input, []);
Http::put($user_input, []);
Http::patch($user_input, []);
Http::delete($user_input, []);

Http::withUrlParameters([
  'endpoint' => $user_input,
  'page' => 'docs',
])->get('{+endpoint}/{page}');

Http::withQueryParameters([
    'name' => 'Taylor',
    'page' => 1,
])->get($user_input);
