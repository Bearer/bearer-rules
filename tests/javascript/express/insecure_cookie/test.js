const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test("http_only", ({ expect }) => {
    const testCase = "http_only.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("insecure_cookie", ({ expect }) => {
    const testCase = "insecure_cookie.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("insecure_cookie_csurf", ({ expect }) => {
    const testCase = "insecure_cookie_csurf.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("insecure_cookie_session", ({ expect }) => {
    const testCase = "insecure_cookie_session.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("secure_cookie_csurf", ({ expect }) => {
    const testCase = "secure_cookie_csurf.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})