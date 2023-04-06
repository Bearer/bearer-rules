# Contributing

Thanks for your interest in contributing to Bearer Rules.

## Run the tests

Our integration tests run against the latest binary release of Bearer. These tests are included in the CI process, so you shouldn't need to run them in their entirety (which is good because they take a long time to run locally).

The more realistic case is to run tests for a single rule. You can do this locally from a bash shell with the following command:

```bash
  ./scripts/run-tests.sh path-to-rule-testdata-dir
```

For example

```bash
  ./scripts/run_tests.sh ruby/lang/logger/
```

## Add a new rule to bearer-rules

Here are the basic steps to adding a new rule.

1. Create a rule YAML file following the guide [here](https://docs.bearer.com/guides/custom-rule/)
2. Add a directory of test data. This includes example code that should (or for "ok" cases, should not) trigger your new rule. See [here](https://github.com/Bearer/bearer-rules/ruby/lang/logger/testdata) for a simple Ruby example of a testdata directory.
3. Run the test suite on your new rule, to generate snapshot data
```bash
  ./scripts/run-tests.sh path-to-rule-testdata-dir
```
4. Run the linter to check your rule passes
```bash
  ./scripts/lint.sh
```
4. Make a pull request containing all of the above

## Have questions?

You can find more guides and everything you need to started in the [Contributing to Bearer](https://docs.bearer.com/contributing/) documentation, or join the [Discord Community][https://discord.gg/eaHZBJUXRF].
