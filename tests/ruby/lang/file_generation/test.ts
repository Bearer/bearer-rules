const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test.concurrent("datatype_in_csv_generate", async () => {
    const testCase = "datatype_in_csv_generate.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("datatype_in_csv_open", async () => {
    const testCase = "datatype_in_csv_open.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("datatype_in_file_open", async () => {
    const testCase = "datatype_in_file_open.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("datatype_in_io_sysopen", async () => {
    const testCase = "datatype_in_io_sysopen.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})