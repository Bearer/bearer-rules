const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  

  test("bad", () => {
    const testCase = "bad.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("ok", () => {
    const testCase = "ok.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("routes", () => {
    const testCase = "routes.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})