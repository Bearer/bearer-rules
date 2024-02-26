#!/bin/bash -l
#
# Used by test suite to invoke binary
#

test_location=$1
rule_id=$2
rule_loc=$PWD/rules
BEARER_VERSION=${BEARER_VERSION=latest}
FORMAT=${FORMAT=json}

filename=$(basename $test_location)
tmp_location=/tmp/bearer-scan/$filename
mkdir -p /tmp/bearer-scan
cp -R $test_location $tmp_location
if [ -n "$BEARER_BIN" ]; then
    $BEARER_BIN scan $tmp_location \
        --only-rule=$rule_id \
        --disable-default-rules=true \
        --external-rule-dir=$rule_loc \
        --format=${FORMAT} \
        --quiet \
        --force \
        --disable-version-check \
        --exit-code=0 \

else
  if [ -n "$BEARER_WORKSPACE" ]; then
    cd $BEARER_WORKSPACE
    $GO_EXEC run ./cmd/bearer/main.go scan $tmp_location \
      --only-rule=$rule_id \
      --debug \
      --disable-default-rules=true \
      --external-rule-dir=$rule_loc \
      --format=${FORMAT} \
      --disable-version-check \
      --force \
      --exit-code=0 \

  else
    docker run \
      --platform linux/amd64 \
      --rm \
      -v /tmp/bearer-scan:/tmp/bearer-scan \
      -v $rule_loc:/tmp/rules \
      bearer/bearer:$BEARER_VERSION \
        scan $tmp_location \
        --only-rule=$rule_id \
        --disable-default-rules=true \
        --external-rule-dir=/tmp/rules \
        --format=${FORMAT} \
        --quiet \
        --disable-version-check \
        --exit-code=0 \

  fi
fi