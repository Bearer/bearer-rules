#!/bin/sh -l
#
# Run the rules test suits

printf "INFO: Running tests...\n"

N=10

TEST_COUNT=0
FAILURES=0

i=0
for dir in $(find $PWD -type d -name "testdata"); do
  i=$((i+1))
  # (
    # rule_id=${dir//$PWD\//}
    # rule_id=${rule_id///testdata/}
    # rule_id=${rule_id//\//_}

    for file in $(find $dir -type f); do
      TEST_COUNT=$((TEST_COUNT+1))

      test_result=$(mktemp "${TMPDIR:-/tmp/}$(basename $file).XXXXXXXXXXXX")
      test_snapshot=${file//testdata/.snapshots}.yml

      printf "$test_snapshot\n"

    #   # docker run --platform linux/amd64 --rm -v $dir:/tmp/scan/$dir bearer/bearer:latest-amd64 scan /tmp/scan$file --only-rule=$rule_id --format=yaml > $test_result
    #   docker run --platform linux/amd64 --rm -v $dir:/tmp/scan/$dir bearer/bearer:latest-amd64 scan /tmp/scan$file --format=yaml > $test_result

      if [ -n "$UPDATE_SNAPSHOTS" ] || [ ! -f $test_snapshot ]
      then
        printf "INFO: Building snapshot...\n"
        cat $test_result > $test_snapshot
      else
        # diff $test_result $test_snapshot

        if [ $? -ne 0 ]
        then
          FAILURES=$((FAILURES+1))
        fi
      fi
    done
  # ) &

  # (( $i % $N == 0 )) && wait

done

# wait

printf "INFO: $TEST_COUNT tests run\n"
if [ $FAILURES != 0 ]
then
  printf "ERROR: $FAILURES tests failed\n"
  exit 1
fi