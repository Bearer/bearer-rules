const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test("datatype_in_csv_generate", ({ expect }) => {
    const testCase = "datatype_in_csv_generate.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("datatype_in_csv_open", ({ expect }) => {
    const testCase = "datatype_in_csv_open.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("datatype_in_file_open", ({ expect }) => {
    const testCase = "datatype_in_file_open.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("datatype_in_io_sysopen", ({ expect }) => {
    const testCase = "datatype_in_io_sysopen.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})