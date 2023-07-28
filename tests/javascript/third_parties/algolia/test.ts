const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test.concurrent("datatype_in_index", async () => {
    const testCase = "datatype_in_index.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("datatype_in_save_object", async () => {
    const testCase = "datatype_in_save_object.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})