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

    public function action2() {
        $response = new Response($data, Response::HTTP_OK, [
            "Other" => $ok,
            "Content-Security-Policy" => $userInput
        ]);
        $response = new Response($data, Response::HTTP_OK, [
            "X-Frame-Options" => $userInput,
            "Other" => $ok,
        ]);
        return $response;
    }
}
