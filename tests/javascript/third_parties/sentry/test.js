const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  

  test("javascript_add_breadcrumb", () => {
    const testCase = "javascript_add_breadcrumb.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("javascript_capture_event", () => {
    const testCase = "javascript_capture_event.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("javascript_capture_exception", () => {
    const testCase = "javascript_capture_exception.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("javascript_capture_message", () => {
    const testCase = "javascript_capture_message.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("javascript_configure_scope_set_extra", () => {
    const testCase = "javascript_configure_scope_set_extra.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("javascript_configure_scope_set_tag", () => {
    const testCase = "javascript_configure_scope_set_tag.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("javascript_configure_scope_set_user", () => {
    const testCase = "javascript_configure_scope_set_user.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})