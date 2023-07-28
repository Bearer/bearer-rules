const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test.concurrent("node_serialize", async () => {
    const testCase = "node_serialize.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("ok_safe_deserialization", async () => {
    const testCase = "ok_safe_deserialization.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("serialize_error", async () => {
    const testCase = "serialize_error.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})