const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  

  test("datatype_in_alias", () => {
    const testCase = "datatype_in_alias.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("datatype_in_group", () => {
    const testCase = "datatype_in_group.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("datatype_in_identify", () => {
    const testCase = "datatype_in_identify.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("datatype_in_page", () => {
    const testCase = "datatype_in_page.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("datatype_in_track", () => {
    const testCase = "datatype_in_track.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("ok_ignored_datatypes", () => {
    const testCase = "ok_ignored_datatypes.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("ok_no_datatypes", () => {
    const testCase = "ok_no_datatypes.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})