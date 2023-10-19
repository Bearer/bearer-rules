<?php

try {
  echo "hello";
} catch (OneError | OtherError $e) {
  foo($e->getCode());
} catch (FooError $f) {
  foo($f->getCode());
} finally {
  echo "done";
}
