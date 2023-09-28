<?php

use Symfony\Contracts\HttpClient\HttpClientInterface;

$user_input = "http://{$_GET['host']}";

class SymfonyDocs
{
    public function __construct(
      private HttpClientInterface $client,
    ) {
    }

    public function fetchSomething(): array {
      $this->client->request('GET', $user_input);
    }
}
