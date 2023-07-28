const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test.concurrent("ftp_new", async () => {
    const testCase = "ftp_new.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("ftp_open", async () => {
    const testCase = "ftp_open.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("ftp_open_with_datatype", async () => {
    const testCase = "ftp_open_with_datatype.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("ok_secure_ftp", async () => {
    const testCase = "ok_secure_ftp.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})