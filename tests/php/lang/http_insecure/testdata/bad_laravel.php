<?php

use Illuminate\Support\Facades\Http;

$insecure_url = "http://oops.example.com";

Http::head($insecure_url, []);
Http::get($insecure_url, []);
Http::post($insecure_url, []);
Http::put($insecure_url, []);
Http::patch($insecure_url, []);
Http::delete($insecure_url, []);

Http::withUrlParameters([
  'endpoint' => $insecure_url,
  'page' => 'docs',
])->get('{+endpoint}/{page}');

Http::withQueryParameters([
    'name' => 'Taylor',
    'page' => 1,
])->get($insecure_url);
