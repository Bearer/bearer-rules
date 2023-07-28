const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test.concurrent("ok_not_unsafe", async () => {
    const testCase = "ok_not_unsafe.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("unsafe_curb", async () => {
    const testCase = "unsafe_curb.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("unsafe_excon", async () => {
    const testCase = "unsafe_excon.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("unsafe_get", async () => {
    const testCase = "unsafe_get.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("unsafe_net_http", async () => {
    const testCase = "unsafe_net_http.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("unsafe_open", async () => {
    const testCase = "unsafe_open.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("unsafe_post", async () => {
    const testCase = "unsafe_post.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})