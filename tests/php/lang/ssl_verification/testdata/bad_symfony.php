<?php

use Symfony\Contracts\HttpClient\HttpClientInterface;

class SymfonyDocs
{
    public function __construct(
      private HttpClientInterface $client,
    ) {
    }

    public function fetchSomething(): array {
      $this->client->request('GET', $url, [
        'verify_peer' => false
      ]);

      $this->client->request('GET', $url, [
        'verify_host' => false
      ]);
    }
}
