const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  

  test("md5_hash", () => {
    const testCase = "md5_hash.java"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})