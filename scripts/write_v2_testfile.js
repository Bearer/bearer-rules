const fs = require("fs");
const path = require("path");

FILE_MAPPING = {
  "go/": "test.go",
  "java/": "test.java",
  "javascript/": "test.js",
  "php/": "test.php",
  "python/": "test.py",
  "ruby/": "test.rb",
};

function writeTestFileIfNotExists(filePath) {
  try {
    filePath = filePath.replace(".yml", "");
    filePath = filePath.replace("/rules/", "/tests/");

    var content =
      "// Use bearer:expected <rule_name> to flag expected findings";
    if (filePath.includes("python") || filePath.includes("ruby")) {
      content = "# Use bearer:expected <rule_name> to flag expected findings";
    }

    var testFilename = "";
    if (filePath.includes("go")) {
      testFilename = "main.go";
    }
    if (filePath.includes("java")) {
      testFilename = "main.java";
    }
    if (filePath.includes("javascript")) {
      // ordering is important here
      // javascript must come after java
      testFilename = "app.js";
    }
    if (filePath.includes("php")) {
      testFilename = "index.php";
    }
    if (filePath.includes("python")) {
      testFilename = "main.py";
    }
    if (filePath.includes("ruby")) {
      testFilename = "main.rb";
    }

    const fullFilePath = path.join(filePath, testFilename);

    if (!fs.existsSync(fullFilePath)) {
      const directoryPath = path.dirname(fullFilePath);

      if (!fs.existsSync(directoryPath)) {
        fs.mkdirSync(directoryPath, { recursive: true });
      }

      fs.writeFileSync(fullFilePath, content, "utf8");
      console.error(`Test file ${fullFilePath} written successfully.`);
    } else {
      console.error(`Test file already exists ${fullFilePath}`);
    }
  } catch (err) {
    console.error("Error writing test file:", err);
  }
}

writeTestFileIfNotExists(process.argv[2]);
