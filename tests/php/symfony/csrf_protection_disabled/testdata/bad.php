<?php

// config/packages/framework.php
use Symfony\Config\FrameworkConfig;

return static function (FrameworkConfig $framework): void {
    $framework->csrfProtection()
        ->enabled(false)
    ;
};

class FooController extends AbstractController
{
  public function action()
  {
    $this->createForm(FooType::class, $foo, [
      'csrf_protection' => false,
      'other' => false,
    ]);
  }
}
