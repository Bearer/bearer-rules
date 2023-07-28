const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test.concurrent("datatype_in_alias", async () => {
    const testCase = "datatype_in_alias.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("datatype_in_group", async () => {
    const testCase = "datatype_in_group.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("datatype_in_identify", async () => {
    const testCase = "datatype_in_identify.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("datatype_in_page", async () => {
    const testCase = "datatype_in_page.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("datatype_in_track", async () => {
    const testCase = "datatype_in_track.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("ok_ignored_datatypes", async () => {
    const testCase = "ok_ignored_datatypes.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("ok_no_datatypes", async () => {
    const testCase = "ok_no_datatypes.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})