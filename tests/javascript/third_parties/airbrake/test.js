const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  

  test("datatype_in_notify", () => {
    const testCase = "datatype_in_notify.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("ok_no_datatype", () => {
    const testCase = "ok_no_datatype.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})