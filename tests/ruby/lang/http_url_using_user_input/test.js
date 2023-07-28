const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  

  test("ok_not_unsafe", () => {
    const testCase = "ok_not_unsafe.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("unsafe_curb", () => {
    const testCase = "unsafe_curb.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("unsafe_excon", () => {
    const testCase = "unsafe_excon.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("unsafe_get", () => {
    const testCase = "unsafe_get.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("unsafe_net_http", () => {
    const testCase = "unsafe_net_http.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("unsafe_open", () => {
    const testCase = "unsafe_open.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("unsafe_post", () => {
    const testCase = "unsafe_post.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})