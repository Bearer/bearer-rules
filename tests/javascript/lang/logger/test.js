const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test("child", ({ expect }) => {
    const testCase = "child.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("child_level", ({ expect }) => {
    const testCase = "child_level.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("console", ({ expect }) => {
    const testCase = "console.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("datatype_leak", ({ expect }) => {
    const testCase = "datatype_leak.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("log", ({ expect }) => {
    const testCase = "log.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("ok_no_datatypes", ({ expect }) => {
    const testCase = "ok_no_datatypes.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})