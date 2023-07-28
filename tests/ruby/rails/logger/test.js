const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  

  test("datatype_leak", () => {
    const testCase = "datatype_leak.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("ok_no_datatypes", () => {
    const testCase = "ok_no_datatypes.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})