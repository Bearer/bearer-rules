const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test.concurrent("datatype_in_notify", async () => {
    const testCase = "datatype_in_notify.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("ok_no_datatype", async () => {
    const testCase = "ok_no_datatype.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})