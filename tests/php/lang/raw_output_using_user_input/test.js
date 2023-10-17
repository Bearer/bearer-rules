const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)

  test("echo_using_user_input", () => {
    const testCase = "echo.php"
    expect(invoke(testCase)).toMatchSnapshot()
  })

  test("print_using_user_input", () => {
    const testCase = "print.php"
    expect(invoke(testCase)).toMatchSnapshot()
  })
})
