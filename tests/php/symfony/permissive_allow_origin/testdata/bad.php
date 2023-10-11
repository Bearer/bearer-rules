<?php

use \Symfony\Component\HttpFoundation\Response;

$userInput = $_GET["foo"];

class Controller {
    public function action() {
        $response = new Response();
        $response->headers->set('Access-Control-Allow-Origin', "*");
        return $response;
    }
}
