<?php

use \Symfony\Component\HttpFoundation\Response;

$userInput = $_GET["foo"];

class Controller {
    public function action() {
        $response = new Response();
# bearer:expected php_symfony_permissive_allow_origin
        $response->headers->set('Access-Control-Allow-Origin', "*");
        return $response;
    }

    public function action2() {
# bearer:expected php_symfony_permissive_allow_origin
        $response = new Response($data, Response::HTTP_OK, ["Access-Control-Allow-Origin" => "*"]);
        return $response;
    }
}
