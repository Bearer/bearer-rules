<?php

$xpath = new DOMXPath($document);
$xpath->evaluate($ok, $contextNode);
$xpath->query($ok, $contextNode);

$element = new SimpleXMLElement("<x></x>");
$element->xpath($ok);
