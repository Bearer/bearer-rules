module.exports = function testJSContent(filePath, testCase) {
  const testName = filePath.split('/').pop();

  return `const {
  createNewInvoker,
  getEnvironment,
} = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createNewInvoker(ruleId, ruleFile, testBase)

  test("${testName}", () => {
    const testCase = "${testCase}"

    const results = invoke(testCase)

    expect(results).toEqual({
      Missing: [],
      Extra: []
    })
  })
})`;
};
