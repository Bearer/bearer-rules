const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)

  test("ok", () => {
    const testCase = "ok.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })

  test("unsafe", () => {
    const testCase = "unsafe.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })

  test("with_user_input", () => {
    const testCase = "with_user_input.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
})