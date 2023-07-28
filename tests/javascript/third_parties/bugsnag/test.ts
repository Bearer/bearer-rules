const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test.concurrent("datatype_in_breadcrumb", async () => {
    const testCase = "datatype_in_breadcrumb.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("datatype_in_notify", async () => {
    const testCase = "datatype_in_notify.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("datatype_in_session", async () => {
    const testCase = "datatype_in_session.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("datatype_in_start", async () => {
    const testCase = "datatype_in_start.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("ok_ignored_datatype_only", async () => {
    const testCase = "ok_ignored_datatype_only.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})