<?php

use \Symfony\Component\HttpFoundation\Response;

class Controller {
    public function action() {
        $response = new Response();
        $response->headers->set('X-Frame-Options', $ok);
        $response->headers->set('Content-Security-Policy', $ok);
        return $response;
    }

    public function action2() {
        $response = new Response($data, Response::HTTP_OK, [
            "X-Frame-Options" => $ok,
            "Content-Security-Policy" => $ok
        ]);
        return $response;
    }
}
