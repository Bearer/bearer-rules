const fs = require("fs");
const path = require("path");

function testjsContent(filePath, testCase) {
  testName = filePath.split("/").pop();

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

    expect(results.Missing).toEqual([])
    expect(results.Extra).toEqual([])
  })
})`;
}

function writeTestFileIfNotExists(filePath) {
  try {
    filePath = filePath.replace(".yml", "");
    filePath = filePath.replace("/rules/", "/tests/");

    // e.g. ["java", "lang", "log_injection"],join("_")
    var ruleName = filePath.split("/").slice(-3).join("_")
    var content =
      `// Use bearer:expected ${ruleName} to flag expected findings`;
    if (filePath.includes("python") || filePath.includes("ruby")) {
      content = `# Use bearer:expected ${ruleName} to flag expected findings`;
    }

    var testdataFileName = "";
    if (filePath.includes("go")) {
      testdataFileName = "main.go";
    }
    if (filePath.includes("java")) {
      testdataFileName = "main.java";
    }
    if (filePath.includes("javascript")) {
      // ordering is important here
      // javascript must come after java
      testdataFileName = "app.js";
    }
    if (filePath.includes("php")) {
      testdataFileName = "index.php";
    }
    if (filePath.includes("python")) {
      testdataFileName = "main.py";
    }
    if (filePath.includes("ruby")) {
      testdataFileName = "main.rb";
    }

    const testdataFilePath = path.join(filePath, "testdata", testdataFileName);

    // write testdata file
    if (!fs.existsSync(testdataFilePath)) {
      const directoryPath = path.dirname(testdataFilePath);

      if (!fs.existsSync(directoryPath)) {
        fs.mkdirSync(directoryPath, { recursive: true });
      }

      fs.writeFileSync(testdataFilePath, content, "utf8");
      console.error(`testdata file written successfully - ${testdataFilePath}`);
    } else {
      console.error(`testdata file already exists - ${testdataFilePath}`);
    }

    // write test.js file
    const testFilePath = path.join(filePath, "test.js");
    if (!fs.existsSync(testFilePath)) {
      const directoryPath = path.dirname(testFilePath);

      if (!fs.existsSync(directoryPath)) {
        fs.mkdirSync(directoryPath, { recursive: true });
      }

      fs.writeFileSync(
        testFilePath,
        testjsContent(filePath, testdataFileName),
        "utf8",
      );
      console.error(`test.js file written successfully - ${testFilePath}`);
    } else {
      console.error(`test.js file already exists - ${testFilePath}`);
    }
  } catch (err) {
    console.error("Error writing test file:", err);
  }
}

writeTestFileIfNotExists(process.argv[2]);
