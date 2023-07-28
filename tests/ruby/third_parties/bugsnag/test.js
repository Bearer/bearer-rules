const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test("before_bugsnag_notify_add_metadata", ({ expect }) => {
    const testCase = "before_bugsnag_notify_add_metadata.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("before_bugsnag_notify_set_user", ({ expect }) => {
    const testCase = "before_bugsnag_notify_set_user.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("breadcrumb", ({ expect }) => {
    const testCase = "breadcrumb.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("bugsnag_notify", ({ expect }) => {
    const testCase = "bugsnag_notify.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})