<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class FooController {
  #[Route('/foo/{x}')]
  public function foo(int $x): Response {
    return $this->redirect($ok);
  }

  #[Route('/bar')]
  public function bar(): Response {
    return $this->redirectToRoute($ok, []);
  }
}
