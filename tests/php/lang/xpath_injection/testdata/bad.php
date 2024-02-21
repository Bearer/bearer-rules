<?php

$userInput = $_GET["oops"];

$xpath = new DOMXPath($document);
# bearer:expected php_lang_xpath_injection
$xpath->evaluate($userInput, $contextNode);
# bearer:expected php_lang_xpath_injection
$xpath->query($userInput, $contextNode);

$element = new SimpleXMLElement("<x></x>");
# bearer:expected php_lang_xpath_injection
$element->xpath($userInput);
$element2 = simplexml_import_dom($node);
# bearer:expected php_lang_xpath_injection
$element2->xpath($userInput);
$element3 = simplexml_load_file($filename);
# bearer:expected php_lang_xpath_injection
$element3->xpath($userInput);
$element4 = simplexml_load_string($data);
# bearer:expected php_lang_xpath_injection
$element4->xpath($userInput);
