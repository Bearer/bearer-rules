const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test.concurrent("insecure-document_write", async () => {
    const testCase = "insecure-document_write.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("insecure-element_ref", async () => {
    const testCase = "insecure-element_ref.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("insecure-property_assigment", async () => {
    const testCase = "insecure-property_assigment.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("secure", async () => {
    const testCase = "secure.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})