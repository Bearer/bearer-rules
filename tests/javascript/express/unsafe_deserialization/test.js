const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  

  test("node_serialize", () => {
    const testCase = "node_serialize.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("ok_safe_deserialization", () => {
    const testCase = "ok_safe_deserialization.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("serialize_error", () => {
    const testCase = "serialize_error.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})