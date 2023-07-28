const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test("express_jwt_not_revoked", ({ expect }) => {
    const testCase = "express_jwt_not_revoked.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("ok_express_jwt_revoked", ({ expect }) => {
    const testCase = "ok_express_jwt_revoked.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})