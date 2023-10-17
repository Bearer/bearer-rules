const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)

  test("ok", () => {
    const testCase = "ok.php"
    expect(invoke(testCase)).toMatchSnapshot()
  })

  test("bad", () => {
    const testCase = "bad.php"
    expect(invoke(testCase)).toMatchSnapshot()
  })
})
