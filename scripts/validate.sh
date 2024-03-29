#!/bin/bash
printf "INFO: Validating rule structure...\n"
args=""
for rule_file in $(find $PWD/rules -type f | grep .yml | grep -vE '.snapshots|.github'); do
  args="$args -d $rule_file"
done

npx ajv-cli -s scripts/rule_schema_v2.jsonc$args --allow-union-types