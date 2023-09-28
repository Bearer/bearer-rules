<?php

use Illuminate\Support\Facades\Http;

$secure_url = "https://ok.example.com";

Http::head($secure_url, []);

Http::withUrlParameters([
  'endpoint' => $secure_url,
  'page' => 'docs',
])->get('{+endpoint}/{page}');

Http::withQueryParameters([
    'name' => 'Taylor',
    'page' => 1,
])->get($secure_url);
