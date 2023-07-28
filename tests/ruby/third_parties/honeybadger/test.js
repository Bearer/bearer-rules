const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  

  test("honeybadger_breadcrumb", () => {
    const testCase = "honeybadger_breadcrumb.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("honeybadger_context", () => {
    const testCase = "honeybadger_context.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("honeybadger_methods", () => {
    const testCase = "honeybadger_methods.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("honeybadger_notify", () => {
    const testCase = "honeybadger_notify.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})