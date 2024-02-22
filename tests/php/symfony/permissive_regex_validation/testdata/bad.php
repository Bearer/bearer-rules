<?php

namespace App\Entity;

use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Validator\Mapping\ClassMetadata;

class Author
{
# bearer:expected php_symfony_permissive_regex_validation
    #[Assert\Regex('/\Afoo/')]
    protected string $foo;

# bearer:expected php_symfony_permissive_regex_validation
    #[Symfony\Component\Validator\Constraints\Regex(
        pattern: '/foo\z/',
        message: 'Bar must be valid',
    )]
    private string $bar;

    public static function loadValidatorMetadata(ClassMetadata $metadata): void
    {
# bearer:expected php_symfony_permissive_regex_validation
        $metadata->addPropertyConstraint('foo', new Assert\Regex([
            'pattern' => '/^foo$/',
            'message' => 'Foo must be valid',
        ]));
# bearer:expected php_symfony_permissive_regex_validation
        $metadata->addPropertyConstraint('bar', new Symfony\Component\Validator\Constraints\Regex('/foo/'));
    }
}
