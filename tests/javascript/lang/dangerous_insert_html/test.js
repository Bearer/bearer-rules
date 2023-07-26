const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  

  test("insecure-document_write", () => {
    const testCase = "insecure-document_write.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("insecure-element_ref", () => {
    const testCase = "insecure-element_ref.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("insecure-property_assigment", () => {
    const testCase = "insecure-property_assigment.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("secure", () => {
    const testCase = "secure.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})