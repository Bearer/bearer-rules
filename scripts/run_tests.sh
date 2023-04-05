#!/bin/bash -l
#
# Run the rules test suits

printf "INFO: Running tests...\n"

TEST_COUNT=0
FAILURES=0
TARGET=$1

trap printexit SIGINT
printexit() {
  printf "INFO: $TEST_COUNT tests run\n"
  if ((  $FAILURES != 0 )); then
    printf "ERROR: $FAILURES tests failed\n"
    exit 1
  fi
  printf "INFO: tests passed ok!\n"
  exit 0
}

for dir in $(find ${PWD}/$TARGET -type d -name "testdata"); do
  rule_id="${dir//$PWD\//}"
  rule_id="${rule_id///testdata/}"
  rule_id="${rule_id//\//_}"
  printf "$rule_id\n"

  for file in $(find $dir -type f); do
    TEST_COUNT=$((TEST_COUNT+1))

    test_result=$(mktemp "${TMPDIR:-/tmp/}$(basename $file).XXXXXXXXXXXX")
    test_snapshot="${file//testdata/.snapshots}"
    test_snapshot=${test_snapshot%.*}.yml
    filename=$(basename $file)

    docker run --platform linux/amd64 --rm -v $dir:/tmp/scan -v $PWD:/tmp/rules bearer/bearer:canary-amd64 scan /tmp/scan/$filename --only-rule=$rule_id --disable-default-rules=true --external-rule-dir=/tmp/rules --format=yaml > $test_result

    if [ -n "$UPDATE_SNAPSHOTS" ] || [ ! -f $test_snapshot ]
    then
      printf "INFO: Building snapshot...\n"
      cat $test_result > $test_snapshot
    else
      diff $test_result $test_snapshot

      if [ $? -ne 0 ]
      then
        FAILURES=$((FAILURES+1))
      fi
    fi
  done
done

printexit