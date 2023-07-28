const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test("eval", ({ expect }) => {
    const testCase = "eval.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("new_function", ({ expect }) => {
    const testCase = "new_function.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("secure", ({ expect }) => {
    const testCase = "secure.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("set_interval", ({ expect }) => {
    const testCase = "set_interval.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("set_timeout", ({ expect }) => {
    const testCase = "set_timeout.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})