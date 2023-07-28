const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test.concurrent("insecure-raw_input", async () => {
    const testCase = "insecure-raw_input.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("insecure-template_string", async () => {
    const testCase = "insecure-template_string.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("secure-render-markdown", async () => {
    const testCase = "secure-render-markdown.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("secure-sanitize", async () => {
    const testCase = "secure-sanitize.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("secure-template_string", async () => {
    const testCase = "secure-template_string.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})