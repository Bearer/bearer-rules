const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  

  test("http_only", () => {
    const testCase = "http_only.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("insecure_cookie", () => {
    const testCase = "insecure_cookie.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("insecure_cookie_csurf", () => {
    const testCase = "insecure_cookie_csurf.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("insecure_cookie_session", () => {
    const testCase = "insecure_cookie_session.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("secure_cookie_csurf", () => {
    const testCase = "secure_cookie_csurf.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})