const { createInvoker, getEnvironment } = require("../../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)

  test("test", () => {
    const testCase = "main.go"
    expect(invoke(testCase)).toMatchSnapshot()
  })

  test("test 2", () => {
    const testCase = "main2.go"
    expect(invoke(testCase)).toMatchSnapshot()
  })
})
