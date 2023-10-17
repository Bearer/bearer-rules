<?php

$userInput = "thing_" . $_GET["oops"];

use Symfony\Component\HttpFoundation\RequestStack;

class SomeService
{
    public function __construct(
        private RequestStack $requestStack,
    ) {
        $session = $requestStack->getSession();
        $session->get($ok, $userInput);
        $session->put($ok, $userInput);
    }

    public function someMethod(): void
    {
        $session = $this->requestStack->getSession();
        $session->get($ok, $userInput);
        $session->put($ok, $userInput);
    }
}

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class FooController {
  #[Route('/foo')]
  public function foo(Request $request): Response {
    $session = $request->getSession();
    $session->get($ok, $userInput);
    $session->put($ok, $userInput);
  }
}
