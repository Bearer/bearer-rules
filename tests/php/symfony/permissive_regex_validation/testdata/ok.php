<?php

namespace App\Entity;

use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Validator\Mapping\ClassMetadata;

class Author
{
    #[Assert\Regex('/\Afoo\z/')]
    protected string $foo;

    #[Symfony\Component\Validator\Constraints\Regex(
        pattern: '/\Afoo\z/',
        message: 'Bar must be valid',
    )]
    private string $bar;

    public static function loadValidatorMetadata(ClassMetadata $metadata): void
    {
        $metadata->addPropertyConstraint('foo', new Assert\Regex([
            'pattern' => '/\Afoo\z/',
            'message' => 'Foo must be valid',
        ]));
        $metadata->addPropertyConstraint('bar', new Symfony\Component\Validator\Constraints\Regex('/\Afoo\z/'));
    }
}
