<?php

$userInput = "thing_" . $_GET["oops"];

use Symfony\Component\HttpFoundation\RequestStack;

class SomeService
{
    public function __construct(
        private RequestStack $requestStack,
    ) {
        $session = $requestStack->getSession();
# bearer:expected php_symfony_session_key_using_user_input
        $session->get($userInput, []);
# bearer:expected php_symfony_session_key_using_user_input
        $session->put($userInput, $data);
    }

    public function someMethod(): void
    {
        $session = $this->requestStack->getSession();
# bearer:expected php_symfony_session_key_using_user_input
        $session->get($userInput, []);
# bearer:expected php_symfony_session_key_using_user_input
        $session->put($userInput, $data);
    }
}

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class FooController {
  #[Route('/foo')]
  public function foo(Request $request): Response {
    $session = $request->getSession();
# bearer:expected php_symfony_session_key_using_user_input
    $session->get($userInput, []);
# bearer:expected php_symfony_session_key_using_user_input
    $session->put($userInput, $data);
  }
}
