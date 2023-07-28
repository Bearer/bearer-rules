const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test("honeybadger_breadcrumb", ({ expect }) => {
    const testCase = "honeybadger_breadcrumb.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("honeybadger_context", ({ expect }) => {
    const testCase = "honeybadger_context.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("honeybadger_methods", ({ expect }) => {
    const testCase = "honeybadger_methods.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("honeybadger_notify", ({ expect }) => {
    const testCase = "honeybadger_notify.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})