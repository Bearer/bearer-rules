const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test.concurrent("honeybadger_breadcrumb", async () => {
    const testCase = "honeybadger_breadcrumb.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("honeybadger_context", async () => {
    const testCase = "honeybadger_context.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("honeybadger_methods", async () => {
    const testCase = "honeybadger_methods.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("honeybadger_notify", async () => {
    const testCase = "honeybadger_notify.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})