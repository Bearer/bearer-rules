const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test("insecure_curb", ({ expect }) => {
    const testCase = "insecure_curb.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("insecure_excon", ({ expect }) => {
    const testCase = "insecure_excon.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("insecure_get", ({ expect }) => {
    const testCase = "insecure_get.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("insecure_net_http", ({ expect }) => {
    const testCase = "insecure_net_http.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("insecure_post", ({ expect }) => {
    const testCase = "insecure_post.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("insecure_post_form_with_datatype", ({ expect }) => {
    const testCase = "insecure_post_form_with_datatype.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("insecure_post_with_datatype", ({ expect }) => {
    const testCase = "insecure_post_with_datatype.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("ok_secure_url", ({ expect }) => {
    const testCase = "ok_secure_url.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("uri_encode_form", ({ expect }) => {
    const testCase = "uri_encode_form.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})