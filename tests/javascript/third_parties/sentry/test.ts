const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test.concurrent("javascript_add_breadcrumb", async () => {
    const testCase = "javascript_add_breadcrumb.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("javascript_capture_event", async () => {
    const testCase = "javascript_capture_event.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("javascript_capture_exception", async () => {
    const testCase = "javascript_capture_exception.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("javascript_capture_message", async () => {
    const testCase = "javascript_capture_message.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("javascript_configure_scope_set_extra", async () => {
    const testCase = "javascript_configure_scope_set_extra.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("javascript_configure_scope_set_tag", async () => {
    const testCase = "javascript_configure_scope_set_tag.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("javascript_configure_scope_set_user", async () => {
    const testCase = "javascript_configure_scope_set_user.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})