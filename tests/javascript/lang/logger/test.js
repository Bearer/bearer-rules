const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  

  test("child", () => {
    const testCase = "child.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("child_level", () => {
    const testCase = "child_level.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("console", () => {
    const testCase = "console.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("datatype_leak", () => {
    const testCase = "datatype_leak.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("log", () => {
    const testCase = "log.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("ok_no_datatypes", () => {
    const testCase = "ok_no_datatypes.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})