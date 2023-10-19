<?php

$userInput = $_GET["oops"];

$xpath = new DOMXPath($document);
$xpath->evaluate($userInput, $contextNode);
$xpath->query($userInput, $contextNode);

$element = new SimpleXMLElement("<x></x>");
$element->xpath($userInput);
$element2 = simplexml_import_dom($node);
$element2->xpath($userInput);
$element3 = simplexml_load_file($filename);
$element3->xpath($userInput);
$element4 = simplexml_load_string($data);
$element4->xpath($userInput);
