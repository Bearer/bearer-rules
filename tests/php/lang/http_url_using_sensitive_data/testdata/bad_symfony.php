<?php

use Symfony\Contracts\HttpClient\HttpClientInterface;

class SymfonyDocs
{
    public function __construct(
      private HttpClientInterface $client,
    ) {
    }

    public function fetchSomething(): array {
# bearer:expected php_lang_http_url_using_sensitive_data
      $this->client->request('GET', $url, [
        'query' => ["user" => $user->email],
        'headers' => []
      ]);
    }
}
