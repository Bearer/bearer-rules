const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test.concurrent("file_generation", async () => {
    const testCase = "file_generation.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})