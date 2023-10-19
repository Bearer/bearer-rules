const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)

  test("insecure_library", () => {
    const testCase = "insecure.php"
    expect(invoke(testCase)).toMatchSnapshot()
  })

  test("secure_type", () => {
    const testCase = "safe.php"
    expect(invoke(testCase)).toMatchSnapshot()
  })
})
