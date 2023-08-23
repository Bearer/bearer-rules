const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)

  test("insecure-raw_input", () => {
    const testCase = "insecure-raw_input.js"
    expect(invoke(testCase)).toMatchSnapshot()
  })

  test("insecure-template_string", () => {
    const testCase = "insecure-template_string.js"
    expect(invoke(testCase)).toMatchSnapshot()
  })

  test("secure-render-markdown", () => {
    const testCase = "secure-render-markdown.js"
    expect(invoke(testCase)).toMatchSnapshot()
  })

  test("secure-sanitize", () => {
    const testCase = "secure-sanitize.js"
    expect(invoke(testCase)).toMatchSnapshot()
  })

  test("secure-template_string", () => {
    const testCase = "secure-template_string.js"
    expect(invoke(testCase)).toMatchSnapshot()
  })

  test("secure-dom-purify", () => {
    const testCase = "secure-dom_purify.tsx"
    expect(invoke(testCase)).toMatchSnapshot()
  })
})
