<?php

try {
  echo "hello";
} catch (OneError | OtherError $e) {
  echo $e->getMessage();
  echo $e->getTrace();
  echo join("\n", $e->getTraceAsString());
} catch (FooError $f) {
  echo $f->getMessage();
} finally {
  echo "done";
}
