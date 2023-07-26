const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  

  test("des", () => {
    const testCase = "des.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})