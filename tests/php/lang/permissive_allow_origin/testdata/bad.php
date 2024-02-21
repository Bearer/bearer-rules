<?php

# bearer:expected php_lang_permissive_allow_origin
header("Access-Control-Allow-Origin: *", true);
# bearer:expected php_lang_permissive_allow_origin
$output->getRequest()->response()->header( 'Access-Control-Allow-Origin: *' );

?>