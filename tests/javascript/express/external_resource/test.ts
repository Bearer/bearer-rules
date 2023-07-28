const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test.concurrent("ok_known_resource", async () => {
    const testCase = "ok_known_resource.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("render_external_resource", async () => {
    const testCase = "render_external_resource.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})