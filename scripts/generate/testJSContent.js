module.exports = function testJSContent(namespace, filePath, testCase) {
  const testName = filePath.split('/').pop();
  let helperDir = namespace.split("/").map(()=>"../").join("")
  return `const {
  createNewInvoker,
  getEnvironment,
} = require("${helperDir}../../helper.js")
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
