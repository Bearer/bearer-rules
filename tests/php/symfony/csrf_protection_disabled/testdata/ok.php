<?php

// config/packages/framework.php
use Symfony\Config\FrameworkConfig;

return static function (FrameworkConfig $framework): void {
    $framework->csrfProtection()
        ->enabled(true)
    ;
};

class FooController extends AbstractController
{
  public function action()
  {
    $this->createForm(FooType::class, $foo, []);
    $this->createForm(FooType::class, $foo, [
      'csrf_protection' => true,
      'other' => false,
    ]);
  }
}
