const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)

  test("sql_injection", () => {
    const testCase = "injection.php"
    expect(invoke(testCase)).toMatchSnapshot()
  })

  test("no_sql_injection", () => {
    const testCase = "safe.php"
    expect(invoke(testCase)).toMatchSnapshot()
  })

  test("sql_injection_query_builder", () => {
    const testCase = "injection-query-builder.php"
    expect(invoke(testCase)).toMatchSnapshot()
  })

  test.skip("sql_injection_function_arguments", () => {
    const testCase = "injection-function-arguments.php"
    expect(invoke(testCase)).toMatchSnapshot()
  })
})
