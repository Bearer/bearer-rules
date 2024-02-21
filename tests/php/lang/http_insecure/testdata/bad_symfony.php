<?php

use Symfony\Contracts\HttpClient\HttpClientInterface;

$insecure_url = "http://oops.example.com";

class SymfonyDocs
{
    public function __construct(
      private HttpClientInterface $client,
    ) {
    }

    public function fetchSomething(): array {
# bearer:expected php_lang_http_insecure
      $this->client->request('GET', $insecure_url);
    }
}
