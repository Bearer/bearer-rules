<?php

use \Symfony\Component\HttpFoundation\Response;

$userInput = $_GET["foo"];

class Controller {
    public function action() {
        $response = new Response();
# bearer:expected php_symfony_ui_redress
        $response->headers->set('X-Frame-Options', $userInput);
# bearer:expected php_symfony_ui_redress
        $response->headers->set('Content-Security-Policy', $userInput);
        return $response;
    }

    public function action2() {
# bearer:expected php_symfony_ui_redress
        $response = new Response($data, Response::HTTP_OK, [
            "Other" => $ok,
            "Content-Security-Policy" => $userInput
        ]);
# bearer:expected php_symfony_ui_redress
        $response = new Response($data, Response::HTTP_OK, [
            "X-Frame-Options" => $userInput,
            "Other" => $ok,
        ]);
        return $response;
    }
}
