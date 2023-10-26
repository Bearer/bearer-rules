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

    results = JSON.parse(out)
    let findings = []
    for (const [key, values] of Object.entries(results)) {
      for (const [value] in values) {
        findings.push({
          // severity: key,
          line_number: values[value]["line_number"],
        })
      }
    }

    console.log(
      "[%s]\n\t%d findings for %s using (%s)\n%s\n\n%s",
      ruleId,
      findings.length,
      ruleFile,
      testBase,
      JSON.stringify(findings, null, 2),
      `Run the following command if you need to debug

(if running bearer develop)
go run cmd/bearer/main.go scan ${testBase} --only-rule ${ruleId} --log-level trace

(if running binary)
bearer scan ${testBase} --only-rule ${ruleId} --log-level trace`
    )

    return JSON.stringify(results, null, 2)
  }
}
