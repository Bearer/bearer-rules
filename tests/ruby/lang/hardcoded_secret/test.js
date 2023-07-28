const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test("bad", ({ expect }) => {
    const testCase = "bad.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("ok", ({ expect }) => {
    const testCase = "ok.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("routes", ({ expect }) => {
    const testCase = "routes.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})