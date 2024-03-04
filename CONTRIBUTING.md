# Contributing

Thanks for your interest in contributing to Bearer Rules.

## Run the tests

Our integration tests run against the latest binary release of Bearer. These tests are included in the CI process, so you shouldn't need to run them in their entirety (which is good because they take a long time to run locally).

The more realistic case is to run tests for a single rule. You can do this locally from a bash shell with the following command:

```bash
  npm test path-to-rule-test-folder
```

For example

```bash
  npm test ./test/ruby/lang/logger
```

## Add a new rule to bearer-rules

Here are the basic steps to adding a new rule.

1. Generate a rule and its associated test folder by running

```bash
yarn generate_rule {LANGUAGE_NAME}_lang_{CUSTOM_RULE_ID}
```
This command will generate:

- a YAML file in `rules/{LANGUAGE_NAME}/lang/{CUSTOM_RULE_ID}.yml` for the rule itself
- a test folder in `tests/{LANGUAGE_NAME}/lang/{CUSTOM_RULE_ID}/` containing:
  - a testdata folder containing a `main.{LANGUAGE_EXTENSION}` file
  - a `test.js` file to run the test.

Replace the placeholders as follows:

- {LANGUAGE_NAME}: The name of the programming language (java, python, go, ruby).
- lang: Indicates the nature or category of the rule.
- {CUSTOM_RULE_ID}: Descriptive keyword specific to the rule.

**Example**

```bash
yarn generate_rule java_lang_hardcoded_secret
```

This command generates:

- a YAML file in `rules/java/lang/hardcoded_secret.yml` for the rule itself
- a test folder in `tests/java/lang/hardcoded_secret/` containing:
  - a testdata folder containing a `main.java` file
  - a `test.js` file to run the test

  NB: you can run `yarn generate_rule --help` for more options

2. Follow the guide [here](https://docs.bearer.com/guides/custom-rule/) to complete the rule
3. Run the tests `yarn test tests/<path-to-test>`
4. Run the linter/validator to check your rule passes

```bash
  ./scripts/lint.sh
  ./scripts/validate.sh
```

5. Make a pull request containing all of the above

## Have questions?

You can find more guides and everything you need to get started in the [Contributing to Bearer](https://docs.bearer.com/contributing/) documentation, or join the [Discord Community](https://discord.gg/eaHZBJUXRF).
