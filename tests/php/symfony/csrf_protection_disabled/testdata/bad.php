<?php

// config/packages/framework.php
use Symfony\Config\FrameworkConfig;

return static function (FrameworkConfig $framework): void {
# bearer:expected php_symfony_csrf_protection_disabled
    $framework->csrfProtection()
        ->enabled(false)
    ;
};

class FooController extends AbstractController
{
  public function action()
  {
# bearer:expected php_symfony_csrf_protection_disabled
    $this->createForm(FooType::class, $foo, [
      'csrf_protection' => false,
      'other' => false,
    ]);
  }
}
