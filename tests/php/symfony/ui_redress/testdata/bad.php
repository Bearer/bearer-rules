<?php

use \Symfony\Component\HttpFoundation\Response;

$userInput = $_GET["foo"];

class Controller {
    public function action() {
        $response = new Response();
        $response->headers->set('X-Frame-Options', $userInput);
        $response->headers->set('Content-Security-Policy', $userInput);
        return $response;
    }
}
