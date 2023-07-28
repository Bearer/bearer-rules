const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test("javascript_add_breadcrumb", ({ expect }) => {
    const testCase = "javascript_add_breadcrumb.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("javascript_capture_event", ({ expect }) => {
    const testCase = "javascript_capture_event.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("javascript_capture_exception", ({ expect }) => {
    const testCase = "javascript_capture_exception.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("javascript_capture_message", ({ expect }) => {
    const testCase = "javascript_capture_message.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("javascript_configure_scope_set_extra", ({ expect }) => {
    const testCase = "javascript_configure_scope_set_extra.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("javascript_configure_scope_set_tag", ({ expect }) => {
    const testCase = "javascript_configure_scope_set_tag.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("javascript_configure_scope_set_user", ({ expect }) => {
    const testCase = "javascript_configure_scope_set_user.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})