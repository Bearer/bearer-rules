<?php

$userInput = $_GET["oops"];

$xpath = new DOMXPath($document);
$xpath->evaluate($userInput, $contextNode);
$xpath->query($userInput, $contextNode);

$element = new SimpleXMLElement("<x></x>");
$element->xpath($userInput);
