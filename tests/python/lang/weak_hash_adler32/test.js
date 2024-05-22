const {
  createNewInvoker,
  getEnvironment,
} = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createNewInvoker(ruleId, ruleFile, testBase)

  test("weak_hash_adler32", () => {
    const testCase = "main.py"

    const results = invoke(testCase)

    expect(results).toEqual({
      Missing: [],
      Extra: []
    })
  })
})