const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)

  test("no_datatype_in_logger", () => {
    const testCase = "ok.php"
    expect(invoke(testCase)).toMatchSnapshot()
  })

  test("datatype_in_logger", () => {
    const testCase = "insecure.php"
    expect(invoke(testCase)).toMatchSnapshot()
  })
})
