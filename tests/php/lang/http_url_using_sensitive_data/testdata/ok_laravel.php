<?php

use Illuminate\Support\Facades\Http;

Http::head($url, $ok);

Http::withQueryParameters([
  'user' => $ok,
  'page' => 1,
])->get($url);

Http::retry(3, 100)->withQueryParameters([
  'user' => $ok,
  'page' => 1,
])->get($url);

Http::retry(3, 100)->get($url, $ok);

Http::send("GET", $url, ["query" => $ok]);
Http::retry(3, 100)->send("GET", $url, ["query" => $ok]);
