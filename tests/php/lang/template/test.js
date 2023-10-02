const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)

  test.skip("ok", () => {
    const testCase = "ok.php"
    expect(invoke(testCase)).toMatchSnapshot()
  })

  test.skip("bad", () => {
    const testCase = "bad.php"
    expect(invoke(testCase)).toMatchSnapshot()
  })
})
