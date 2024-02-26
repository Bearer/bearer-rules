const { execSync } = require("child_process")
const { CI } = process.env

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

function difference(setA, setB) {
  const diff = new Set(setA)

  for (const elem of setB) {
    diff.delete(elem)
  }

  return Array.from(diff)
}

exports.createNewInvoker = (ruleId, ruleFile, testBase) => {
  if (CI !== "true") {
    console.log(
      "[%s]\n\t%s using (%s)\n\n%s",
      ruleId,
      ruleFile,
      testBase,
      `Run the following command if you need to debug

(if running bearer develop)
FORMAT=jsonv2 go run cmd/bearer/main.go scan ${testBase} --only-rule ${ruleId} --log-level trace

(if running binary)
FORMAT=jsonv2 bearer scan ${testBase} --only-rule ${ruleId} --log-level trace`
    )
  }

  return (testCase) => {
    // console.log( `FORMAT=jsonv2 ./scripts/invoke.sh ${testBase}${testCase} ${ruleId}`)
    const out = execSync(
      `FORMAT=jsonv2 ./scripts/invoke.sh ${testBase}${testCase} ${ruleId}`
    ).toString()

    results = JSON.parse(out)

    let findings = []
    if (results.findings != null) {
      for (const result of results.findings) {
        findings.push(`${result.id}:${result.sink.start}`)
      }
    }

    let expectedFindings = []
    if (results.expected_findings != null) {
      for (const result of results.expected_findings) {
        expectedFindings.push(`${result.rule_id}:${result.location.start}`)
      }
    }

    return {
      Extra: difference(new Set(findings), new Set(expectedFindings)),
      Missing: difference(new Set(expectedFindings), new Set(findings)),
    }
  }
}
