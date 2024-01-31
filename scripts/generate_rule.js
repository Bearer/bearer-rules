const fs = require('fs');
const path = require('path');
const { program } = require('commander');
const testJSContent = require('./generate/testJSContent.js');
const ruleYAMLContent = require('./generate/ruleYAMLContent.js');

const languageInPathToFiles = {
  go: 'main.go',
  java: 'main.java',
  javascript: 'app.js',
  php: 'index.php',
  python: 'main.py',
  ruby: 'main.rb',
};

function writeRuleStructure(ruleID) {
  const ruleNameParts = ruleID.split('_');
  const rootRuleFilePath = path.join(
    'rules',
    ruleNameParts[0],
    ruleNameParts[1],
  );
  try {
    if (!fs.existsSync(rootRuleFilePath)) {
      const directoryPath = path.dirname(rootRuleFilePath);

      if (!fs.existsSync(rootRuleFilePath)) {
        fs.mkdirSync(directoryPath, { recursive: true });
      }

      fs.writeFileSync(rootRuleFilePath, content, 'utf8');
      console.log(`testdata file written successfully - ${rootRuleFilePath}`);
    } else {
      console.error(`testdata file already exists - ${rootRuleFilePath}`);
    }

    // write rule.yml file
    const ruleFilePath = path.join(
      rootRuleFilePath,
      ruleNameParts.slice(2).join('_') + '.yml',
    );
    if (!fs.existsSync(ruleFilePath)) {
      fs.writeFileSync(
        ruleFilePath,
        ruleYAMLContent(ruleID, ruleNameParts[0]),
        'utf8',
      );
      console.log(`${ruleID} file written successfully - ${ruleFilePath}`);
    } else {
      console.error(`${ruleID} file already exists - ${ruleFilePath}`);
    }
  } catch (err) {
    console.error('Error writing test file:', err);
  }
}

function writeTestFileIfNotExists(ruleID) {
  try {
    // e.g. ["java", "lang", "log_injection"],join("_")
    const ruleNameParts = ruleID.split('_');
    const content = `// Use bearer:expected ${ruleID} to flag expected findings`;
    if (ruleNameParts[0] == 'python' || ruleNameParts[0].includes('ruby')) {
      content = `# Use bearer:expected ${ruleID} to flag expected findings`;
    }

    let testdataFileName = '';
    for (let part in languageInPathToFiles) {
      if (ruleNameParts[0] == part) {
        testdataFileName = languageInPathToFiles[part];
        break; // Exit the loop once a match is found
      }
    }

    const rootTestdataFilePath = path.join(
      'tests',
      ruleNameParts[0],
      ruleNameParts[1],
      ruleNameParts.slice(2).join('_'),
    );

    const testdataFilePath = path.join(
      rootTestdataFilePath,
      'testdata',
      testdataFileName,
    );

    // write testdata file
    if (!fs.existsSync(testdataFilePath)) {
      const directoryPath = path.dirname(testdataFilePath);

      if (!fs.existsSync(directoryPath)) {
        fs.mkdirSync(directoryPath, { recursive: true });
      }

      fs.writeFileSync(testdataFilePath, content, 'utf8');
      console.error(`testdata file written successfully - ${testdataFilePath}`);
    } else {
      console.error(`testdata file already exists - ${testdataFilePath}`);
    }

    // write test.js file
    const testFilePath = path.join(rootTestdataFilePath, 'test.js');
    if (!fs.existsSync(testFilePath)) {
      const directoryPath = path.dirname(testFilePath);

      if (!fs.existsSync(directoryPath)) {
        fs.mkdirSync(directoryPath, { recursive: true });
      }

      fs.writeFileSync(
        testFilePath,
        testJSContent(rootTestdataFilePath, testdataFileName),
        'utf8',
      );
      console.error(`test.js file written successfully - ${testFilePath}`);
    } else {
      console.error(`test.js file already exists - ${testFilePath}`);
    }
  } catch (err) {
    console.error('Error writing test file:', err);
  }
}

program
  .name('generate-rule')
  .description('Generate a rule structure or only the rule test structure')
  .argument('<ruleID>', 'ruleID to process')
  .version('1.0.0', '-v, --version')
  .option(
    '--only-rule',
    'produce only the rule structure of a given ruleID',
    'false',
  )
  .option(
    '--only-test',
    'produce only the test structure of a given ruleID',
    'false',
  )
  .parse(process.argv);

program.parse();

const options = program.opts();
const ruleID = program.args[0];

if (options.onlyRule === 'false') {
  writeTestFileIfNotExists(ruleID);
}

if (options.onlyTest === 'false') {
  writeRuleStructure(ruleID);
}
