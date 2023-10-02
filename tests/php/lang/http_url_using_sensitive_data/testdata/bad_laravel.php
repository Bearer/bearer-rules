<?php

use Illuminate\Support\Facades\Http;

Http::head($url, $user->email);

Http::withQueryParameters([
  'user' => $user->email,
  'page' => 1,
])->get($url);

Http::retry(3, 100)->withQueryParameters([
  'user' => $user->email,
  'page' => 1,
])->get($url);

Http::retry(3, 100)->get($url, $user->email);

Http::send("GET", $url, ["query" => $user->email]);
Http::retry(3, 100)->send("GET", $url, ["query" => $user->email]);
