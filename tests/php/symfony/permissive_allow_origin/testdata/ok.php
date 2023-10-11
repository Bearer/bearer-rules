<?php

use \Symfony\Component\HttpFoundation\Response;

class Controller {
    public function action() {
        $response = new Response();
        $response->headers->set('Access-Control-Allow-Origin', $ok);
        $response->headers->set('Access-Control-Allow-Origin', "foo");
        return $response;
    }
}
