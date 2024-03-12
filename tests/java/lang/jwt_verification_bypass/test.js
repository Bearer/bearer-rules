const {
  createNewInvoker,
  getEnvironment,
} = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createNewInvoker(ruleId, ruleFile, testBase)

  test("jwt_verification_bypass", () => {
    const testCase = "main.java"

    const results = invoke(testCase)

    expect(results).toEqual({
      Missing: [],
      Extra: []
    })
  })
})