#!/bin/bash -l
#
# Run the singlle rule test
#
# requirements:
# install latest bash and yq
#   brew install bash yq
#
#   have BEARER_RULES_LOCATION and BEARER_LOCATION set
#       export BEARER_RULES_LOCATION=~/go/src/github.com/bearer/bearer-rules/
#       export BEARER_LOCATION=~/go/src/github.com/bearer/bearer
#   
#
# usage:
# ./scripts/run_test_locally java/lang/logger

target=$1

rule_file="${BEARER_RULES_LOCATION}${target}.yml"
test_dir="${BEARER_RULES_LOCATION}${target}"
test_data="${test_dir}/testdata"

# ensure there is empty snapshot dir
snapshot_dir="${test_dir}/.snapshots"
rm -rf $snapshot_dir
mkdir -p $snapshot_dir

for file in $(find $test_data -type f); do

    file_with_extension=$(basename -- $file)
    file_extension="${file_with_extension##*.}"
    file_name="${file_with_extension%.*}"

    echo "generating snapshot for: $file_with_extension"

    rule_id=$(yq '.metadata.id' $rule_file)

    snapshot_file="${snapshot_dir}/${file_name}.yml"

    bearer_program="./cmd/bearer/main.go"

    cd $BEARER_LOCATION
    go run $bearer_program scan --only-rule=$rule_id --disable-default-rules=true --external-rule-dir=$BEARER_RULES_LOCATION --format=yaml $file > $snapshot_file
    cd $BEARER_RULES_LOCATION
done
