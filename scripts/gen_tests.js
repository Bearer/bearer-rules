const fs = require("fs")
const path = require("path")

function writeFileIfNotExists(filePath, content) {
  try {
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, content)
      console.log(`Test "${filePath}" created.`)
    }
  } catch (err) {
    console.error("Error writing test:", err)
  }
}

const templateTest = (caseStrings) =>
  `const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  ${caseStrings}
})`

const templateCase = (refrence) => {
  const name = refrence.split(".")[0]
  return `
  test.concurrent("${name}", async () => {
    const testCase = "${refrence}"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  `
}

const generateTests = (directoryPath) => {
  const items = fs.readdirSync(directoryPath)

  items.forEach((rule) => {
    const itemPath = path.join(directoryPath, rule)
    const stats = fs.statSync(itemPath)

    if (stats.isDirectory()) {
      const tests = fs.readdirSync(path.join(directoryPath, rule, "testdata"))
      caseStrings = tests.map((test) => templateCase(test)).join("")
      writeFileIfNotExists(
        path.join(directoryPath, rule, "test.ts"),
        templateTest(caseStrings)
      )
    }
  })
}

const getSubdirectories = (directoryPath) => {
  const items = fs.readdirSync(directoryPath)
  const subdirectories = []

  items.forEach((item) => {
    const itemPath = path.join(directoryPath, item)
    const stats = fs.statSync(itemPath)

    if (stats.isDirectory()) {
      subdirectories.push(itemPath)
    }
  })
  return subdirectories
}

// iterate over test folders and scaffold test cases
getSubdirectories("tests").map((lang) => {
  getSubdirectories(lang).map((namespace) => {
    generateTests(namespace)
  })
})
