const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test.concurrent("datatype_in_insert_rows", async () => {
    const testCase = "datatype_in_insert_rows.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("ok_ignored_datatype", async () => {
    const testCase = "ok_ignored_datatype.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("ok_no_datatype", async () => {
    const testCase = "ok_no_datatype.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})