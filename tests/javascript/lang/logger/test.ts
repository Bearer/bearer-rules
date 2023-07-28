const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test.concurrent("child", async () => {
    const testCase = "child.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("child_level", async () => {
    const testCase = "child_level.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("console", async () => {
    const testCase = "console.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("datatype_leak", async () => {
    const testCase = "datatype_leak.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("log", async () => {
    const testCase = "log.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("ok_no_datatypes", async () => {
    const testCase = "ok_no_datatypes.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})