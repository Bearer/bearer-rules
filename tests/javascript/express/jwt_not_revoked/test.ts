const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test.concurrent("express_jwt_not_revoked", async () => {
    const testCase = "express_jwt_not_revoked.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("ok_express_jwt_revoked", async () => {
    const testCase = "ok_express_jwt_revoked.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})