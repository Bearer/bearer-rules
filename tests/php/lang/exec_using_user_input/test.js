const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)

  test("bad", () => {
    const testCase = "bad.php"
    expect(invoke(testCase)).toMatchSnapshot()
  })

  test("ok", () => {
    const testCase = "ok.php"
    expect(invoke(testCase)).toMatchSnapshot()
  })

  test.skip("advanced", () => {
    const testCase = "advanced.php"
    expect(invoke(testCase)).toMatchSnapshot()
  })
})
