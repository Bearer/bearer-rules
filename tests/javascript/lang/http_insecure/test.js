const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  

  test("axios_insecure", () => {
    const testCase = "axios_insecure.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("axios_secure", () => {
    const testCase = "axios_secure.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("axios_with_config_insecure", () => {
    const testCase = "axios_with_config_insecure.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("fetch_insecure", () => {
    const testCase = "fetch_insecure.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("fetch_secure", () => {
    const testCase = "fetch_secure.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("request_insecure", () => {
    const testCase = "request_insecure.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("request_secure", () => {
    const testCase = "request_secure.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("xmlhttp_insecure", () => {
    const testCase = "xmlhttp_insecure.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("xmlhttp_secure", () => {
    const testCase = "xmlhttp_secure.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})