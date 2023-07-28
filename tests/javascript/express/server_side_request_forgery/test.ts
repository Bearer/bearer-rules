const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test.concurrent("axios_ssrf_injection", async () => {
    const testCase = "axios_ssrf_injection.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("node_fetch_ssrf_injection", async () => {
    const testCase = "node_fetch_ssrf_injection.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("ok_no_ssrf", async () => {
    const testCase = "ok_no_ssrf.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("puppeteer_ssrf_injection", async () => {
    const testCase = "puppeteer_ssrf_injection.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})