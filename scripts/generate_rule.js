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

function writeRuleStructure(lang, namespace, id, ruleID) {
  const ruleFilePath = path.join(
    'rules',
    lang,
    namespace,
    id + '.yml',
  );
  try {
    if (!fs.existsSync(ruleFilePath)) {
      const directoryPath = path.dirname(ruleFilePath);

      if (!fs.existsSync(directoryPath)) {
        fs.mkdirSync(directoryPath, { recursive: true });
      }

      fs.writeFileSync(
        ruleFilePath,
        ruleYAMLContent(ruleID, lang),
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

function ignoreComment(lang, ruleID) {
  switch(lang) {
    case "python":
    case "ruby":
      return `# Use bearer:expected ${ruleID} to flag expected findings`;
    default:
      return `// Use bearer:expected ${ruleID} to flag expected findings`;
  }
}

const generateRuleID = (lang, namespace, id) => `${lang}_${namespace.replace("/","_")}_${id}`.toLowerCase()

function writeTestFileIfNotExists(lang, namespace, id, ruleID) {

  try {
    const content = ignoreComment(lang, ruleID)

    const rootTestdataFilePath = path.join(
      'tests',
      lang,
      namespace,
      id
    );
    const testdataFileName = languageInPathToFiles[lang]
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
      console.log(`testdata file written successfully - ${testdataFilePath}`);
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
        testJSContent(namespace, rootTestdataFilePath, testdataFileName),
        'utf8',
      );
      console.log(`test.js file written successfully - ${testFilePath}`);
    } else {
      console.error(`test.js file already exists - ${testFilePath}`);
    }
  } catch (err) {
    console.error('Error writing test file:', err);
  }
}

program
  .name('generate-rule')
  .usage("language namespace rule_id")
  .description('Generate a rule structure or only the rule test structure')
  .argument('<language>', 'language')
  .argument('<namespace>', 'namespace example; lang or third_party')
  .argument('<id>', 'name of the rule, example; MY_RULE')
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
const lang = program.args[0];
const namespace = program.args[1];
const id = program.args[2].toLowerCase();

const langs = Object.keys(languageInPathToFiles)
if(langs.indexOf(lang) == -1) {
  program.error('Language must be one of: ' + langs.join(", "));
}
const ruleID = generateRuleID(lang, namespace, id)
console.log("Generating "+ruleID)
if (options.onlyRule === 'false') {
  writeTestFileIfNotExists(lang,namespace,id,ruleID);
}

if (options.onlyTest === 'false') {
  writeRuleStructure(lang,namespace,id,ruleID);
}
