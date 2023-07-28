const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test("insecure-raw_input", ({ expect }) => {
    const testCase = "insecure-raw_input.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("insecure-template_string", ({ expect }) => {
    const testCase = "insecure-template_string.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("secure-render-markdown", ({ expect }) => {
    const testCase = "secure-render-markdown.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("secure-sanitize", ({ expect }) => {
    const testCase = "secure-sanitize.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("secure-template_string", ({ expect }) => {
    const testCase = "secure-template_string.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})