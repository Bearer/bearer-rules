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
# bearer:expected php_lang_http_url_using_user_input
      $this->client->request('GET', $user_input);
    }
}
