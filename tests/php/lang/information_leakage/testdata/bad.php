<?php

try {
  echo "hello";
} catch (OneError | OtherError $e) {
# bearer:expected php_lang_information_leakage
  echo $e->getMessage();
# bearer:expected php_lang_information_leakage
  echo $e->getTrace();
# bearer:expected php_lang_information_leakage
  echo join("\n", $e->getTraceAsString());
} catch (FooError $f) {
# bearer:expected php_lang_information_leakage
  echo $f->getMessage();
} finally {
  echo "done";
}
