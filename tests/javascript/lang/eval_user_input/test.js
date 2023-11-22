const {
  createInvoker,
  createNewInvoker,
  getEnvironment,
} = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  const newInvoke = createNewInvoker(ruleId, ruleFile, testBase)

  test("eval", () => {
    const testCase = "eval.js"
    expect(invoke(testCase)).toMatchSnapshot()
  })

  test("new-eval", () => {
    const testCase = "eval.js"
    const results = newInvoke(testCase)
    expect(results.Missing).toEqual([])
    expect(results.Extra).toEqual([])
  })

  test("new_function", () => {
    const testCase = "new_function.js"
    expect(invoke(testCase)).toMatchSnapshot()
  })

  test("secure", () => {
    const testCase = "secure.js"
    expect(invoke(testCase)).toMatchSnapshot()
  })

  test("set_interval", () => {
    const testCase = "set_interval.js"
    expect(invoke(testCase)).toMatchSnapshot()
  })

  test("set_timeout", () => {
    const testCase = "set_timeout.js"
    expect(invoke(testCase)).toMatchSnapshot()
  })
})
