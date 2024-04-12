const fs = require('fs');
const path = require('path');
const fetch = require('cross-fetch');
const { Command } = require('commander');
const YAML = require('yaml');

const program = new Command();

const RULES_DIR_PATH = "./rules"

async function main() {
    program.name('validate-rule-urls')
    .description('Check validity of URLs in rule descriptions')
    .version('1.0.0', '-v, --version')
    .action(async function(){
      validateUrls()
    });

    await program.parseAsync();
}

async function validateUrls() {
  const yamlFiles = getYamlFiles()
  yamlFiles.forEach(async (yamlFile) => {
    if (yamlFile.path.includes("shared")) return;

    description = yamlFile.data.contents.getIn(["metadata", "remediation_message"])
    urlsFromDescription = extractUrls(description)
    urlsFromDescription.forEach(async (url) => {
      // try to visit
      try {
        const response = await fetch(url);
        if (!response.ok) {
          console.log(`Invalid url: ${url} at ${yamlFile.path}`)
        }
      } catch (error) {
        console.log(`Error fetching: ${url} at ${yamlFile.path}`)
      }
    })
  })
}

function extractUrls(description) {
  const regex = /(?:https?|ftp):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?/gi;
  const matches = [];
  let match;

  // Find all matches in the input string
  while ((match = regex.exec(description)) !== null) {
    matches.push(match[0]);
  }

  return matches;
}

function getYamlFiles() {
  const yamlFiles = [];
  const stack = [RULES_DIR_PATH];

  while (stack.length > 0) {
    const currentDir = stack.pop();
    const files = fs.readdirSync(currentDir);

    files.forEach((file) => {
      const filePath = path.join(currentDir, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        stack.push(filePath); // Add subdirectory to the stack
      } else if (path.extname(file) === '.yaml' || path.extname(file) === '.yml') {
        const yamlContent = fs.readFileSync(filePath, 'utf8');
        const yamlData = YAML.parseDocument(yamlContent);
        yamlFiles.push({ path: filePath, data: yamlData  });
      }
    });
  }

  return yamlFiles;
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});