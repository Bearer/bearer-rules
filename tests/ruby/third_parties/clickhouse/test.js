const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  

  test("datatype_in_insert_rows", () => {
    const testCase = "datatype_in_insert_rows.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("ok_ignored_datatype", () => {
    const testCase = "ok_ignored_datatype.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("ok_no_datatype", () => {
    const testCase = "ok_no_datatype.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})