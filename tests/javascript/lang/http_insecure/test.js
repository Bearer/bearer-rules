const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test("axios_insecure", ({ expect }) => {
    const testCase = "axios_insecure.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("axios_secure", ({ expect }) => {
    const testCase = "axios_secure.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("axios_with_config_insecure", ({ expect }) => {
    const testCase = "axios_with_config_insecure.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("fetch_insecure", ({ expect }) => {
    const testCase = "fetch_insecure.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("fetch_secure", ({ expect }) => {
    const testCase = "fetch_secure.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("request_insecure", ({ expect }) => {
    const testCase = "request_insecure.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("request_secure", ({ expect }) => {
    const testCase = "request_secure.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("xmlhttp_insecure", ({ expect }) => {
    const testCase = "xmlhttp_insecure.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("xmlhttp_secure", ({ expect }) => {
    const testCase = "xmlhttp_secure.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})