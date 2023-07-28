const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test.concurrent("http_only", async () => {
    const testCase = "http_only.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("insecure_cookie", async () => {
    const testCase = "insecure_cookie.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("insecure_cookie_csurf", async () => {
    const testCase = "insecure_cookie_csurf.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("insecure_cookie_session", async () => {
    const testCase = "insecure_cookie_session.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("secure_cookie_csurf", async () => {
    const testCase = "secure_cookie_csurf.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})