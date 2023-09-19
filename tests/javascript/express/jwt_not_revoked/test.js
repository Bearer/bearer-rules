const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)

  test("express_jwt_not_revoked", () => {
    const testCase = "express_jwt_not_revoked.js"
    expect(invoke(testCase)).toMatchSnapshot()
  })

  test("ok_express_jwt_revoked", () => {
    const testCase = "ok_express_jwt_revoked.js"
    expect(invoke(testCase)).toMatchSnapshot()
  })

  test("insecurity_express_jwt_revoked", () => {
    const testCase = "insecurity.ts"
    expect(invoke(testCase)).toMatchSnapshot()
  })
})
