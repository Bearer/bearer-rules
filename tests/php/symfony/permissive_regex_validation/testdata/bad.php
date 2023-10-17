<?php

namespace App\Entity;

use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Validator\Mapping\ClassMetadata;

class Author
{
    #[Assert\Regex('/\Afoo/')]
    protected string $foo;

    #[Symfony\Component\Validator\Constraints\Regex(
        pattern: '/foo\z/',
        message: 'Bar must be valid',
    )]
    private string $bar;

    public static function loadValidatorMetadata(ClassMetadata $metadata): void
    {
        $metadata->addPropertyConstraint('foo', new Assert\Regex([
            'pattern' => '/^foo$/',
            'message' => 'Foo must be valid',
        ]));
        $metadata->addPropertyConstraint('bar', new Symfony\Component\Validator\Constraints\Regex('/foo/'));
    }
}
