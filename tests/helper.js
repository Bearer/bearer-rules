const { execSync } = require("child_process")

exports.getEnvironment = (path) => {
  const slicedPath = path.split("/")

  let processedPath
  if (slicedPath[slicedPath.length - 3] === "gosec") {
    processedPath = slicedPath.slice(-4)
  } else {
    processedPath = slicedPath.slice(-3)
  }

  const ruleId = processedPath.join("_")
  const ruleFile = `./rules/${processedPath.join("/")}.yml`

  return {
    ruleId,
    testBase: `${path}/testdata/`,
    ruleFile,
  }
}

exports.createInvoker = (ruleId, ruleFile, testBase) => {
  return (testCase) => {
    const out = execSync(
      `./scripts/invoke.sh ${ruleFile} ${testBase}${testCase} ${ruleId}`
    ).toString()
    return JSON.stringify(JSON.parse(out), null, 2)
  }
}
