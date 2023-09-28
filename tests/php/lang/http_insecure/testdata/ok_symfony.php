<?php

use Symfony\Contracts\HttpClient\HttpClientInterface;

$secure_url = "https://ok.example.com";

class SymfonyDocs
{
    public function __construct(
      private HttpClientInterface $client,
    ) {
    }

    public function fetchSomething(): array {
      $this->client->request('GET', $secure_url);
    }
}
