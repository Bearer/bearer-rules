<?php

use \Symfony\Component\HttpFoundation\Response;

$userInput = $_GET["foo"];

class Controller {
    public function action() {
        $response = new Response();
        $response->headers->set('Access-Control-Allow-Origin', $userInput);
        return $response;
    }

    public function action2() {
        $response = new Response($data, Response::HTTP_OK, ["Access-Control-Allow-Origin" => $userInput]);
        return $response;
    }
}
