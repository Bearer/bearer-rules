<?php

use Symfony\Contracts\HttpClient\HttpClientInterface;

class SymfonyDocs
{
    public function __construct(
      private HttpClientInterface $client,
    ) {
    }

    public function fetchSomething(): array {
# bearer:expected php_lang_ssl_verification
      $this->client->request('GET', $url, [
        'verify_peer' => false
      ]);

# bearer:expected php_lang_ssl_verification
      $this->client->request('GET', $url, [
        'verify_host' => false
      ]);
    }
}
