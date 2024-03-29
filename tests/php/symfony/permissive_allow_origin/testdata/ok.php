<?php

use \Symfony\Component\HttpFoundation\Response;

class Controller {
    public function action() {
        $response = new Response();
        $response->headers->set('Access-Control-Allow-Origin', $ok);
        $response->headers->set('Access-Control-Allow-Origin', "foo");
        return $response;
    }

    public function action2() {
        $response = new Response($data, Response::HTTP_OK, ["Access-Control-Allow-Origin" => $ok]);
        $response = new Response($data, Response::HTTP_OK, ["Access-Control-Allow-Origin" => "foo"]);
        return $response;
    }
}
