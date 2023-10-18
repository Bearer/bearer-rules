<?php

try {
  echo "hello";
} catch (OneError | OtherError $e) {
  echo $e->getCode();
} catch (FooError $f) {
  echo $f->getCode();
} finally {
  echo "done";
}
