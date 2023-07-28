const { execSync } = require('child_process');

exports.getEnvironment = (path) => ({
    ruleId: path.split("/").slice(-3).join("_"),
    testBase: `${path}/testdata/`,
    ruleFile: `./rules/${path.split("/").slice(-3).join("/")}.yml`
  })

exports.createInvoker = (ruleId, ruleFile, testBase) => {
  return (testCase) => {
    const out = execSync(`./scripts/invoke.sh ${ruleFile} ${testBase}${testCase} ${ruleId}`).toString()
    return JSON.stringify(JSON.parse(out), null, 2)
  }
}

