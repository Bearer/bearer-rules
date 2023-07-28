const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test("axios_ssrf_injection", ({ expect }) => {
    const testCase = "axios_ssrf_injection.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("node_fetch_ssrf_injection", ({ expect }) => {
    const testCase = "node_fetch_ssrf_injection.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("ok_no_ssrf", ({ expect }) => {
    const testCase = "ok_no_ssrf.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("puppeteer_ssrf_injection", ({ expect }) => {
    const testCase = "puppeteer_ssrf_injection.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})