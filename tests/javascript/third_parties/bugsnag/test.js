const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test("datatype_in_breadcrumb", ({ expect }) => {
    const testCase = "datatype_in_breadcrumb.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("datatype_in_notify", ({ expect }) => {
    const testCase = "datatype_in_notify.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("datatype_in_session", ({ expect }) => {
    const testCase = "datatype_in_session.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("datatype_in_start", ({ expect }) => {
    const testCase = "datatype_in_start.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("ok_ignored_datatype_only", ({ expect }) => {
    const testCase = "ok_ignored_datatype_only.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})