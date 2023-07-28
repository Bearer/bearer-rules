const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test.concurrent("insecure_curb", async () => {
    const testCase = "insecure_curb.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("insecure_excon", async () => {
    const testCase = "insecure_excon.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("insecure_get", async () => {
    const testCase = "insecure_get.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("insecure_net_http", async () => {
    const testCase = "insecure_net_http.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("insecure_post", async () => {
    const testCase = "insecure_post.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("insecure_post_form_with_datatype", async () => {
    const testCase = "insecure_post_form_with_datatype.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("insecure_post_with_datatype", async () => {
    const testCase = "insecure_post_with_datatype.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("ok_secure_url", async () => {
    const testCase = "ok_secure_url.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("uri_encode_form", async () => {
    const testCase = "uri_encode_form.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})