const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test.concurrent("axios_insecure", async () => {
    const testCase = "axios_insecure.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("axios_secure", async () => {
    const testCase = "axios_secure.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("axios_with_config_insecure", async () => {
    const testCase = "axios_with_config_insecure.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("fetch_insecure", async () => {
    const testCase = "fetch_insecure.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("fetch_secure", async () => {
    const testCase = "fetch_secure.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("request_insecure", async () => {
    const testCase = "request_insecure.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("request_secure", async () => {
    const testCase = "request_secure.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("xmlhttp_insecure", async () => {
    const testCase = "xmlhttp_insecure.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("xmlhttp_secure", async () => {
    const testCase = "xmlhttp_secure.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})