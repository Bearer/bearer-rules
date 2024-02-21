<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class FooController {
  #[Route('/foo/{x}')]
  public function foo(int $x): Response {
# bearer:expected php_symfony_open_redirect
    return $this->redirect($x);
  }

  #[Route('/bar')]
  public function bar(): Response {
# bearer:expected php_symfony_open_redirect
    return $this->redirectToRoute($_GET["oops"], []);
  }
}
