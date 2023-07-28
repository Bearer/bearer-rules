const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test.concurrent("eval", async () => {
    const testCase = "eval.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("new_function", async () => {
    const testCase = "new_function.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("secure", async () => {
    const testCase = "secure.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("set_interval", async () => {
    const testCase = "set_interval.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("set_timeout", async () => {
    const testCase = "set_timeout.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})