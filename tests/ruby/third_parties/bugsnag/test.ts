const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test.concurrent("before_bugsnag_notify_add_metadata", async () => {
    const testCase = "before_bugsnag_notify_add_metadata.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("before_bugsnag_notify_set_user", async () => {
    const testCase = "before_bugsnag_notify_set_user.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("breadcrumb", async () => {
    const testCase = "breadcrumb.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("bugsnag_notify", async () => {
    const testCase = "bugsnag_notify.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})