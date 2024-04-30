const { Command } = require('commander');
const YAML = require('yaml');
const { readFile, readdir, writeFile } = require('node:fs/promises');
const { resolve } = require('node:path');
const { parse } = require("csv-parse/sync");

const program = new Command();

async function main() {
    program.name('bulk-update')
    .description('Generate changes in files based on updates in rules csv')
    .argument('rules.csv', 'base file for current state can be found at https://docs.bearer.com/rules.csv')
    .version('1.0.0', '-v, --version')
    .option(
      '--csv-delimiter',
      'csv delimiter to use',
      ',',
    )
    .action(async function(){
      const dataSet = await load()
      await Promise.all(dataSet.map(updateRule))
    });

    await program.parseAsync(process.argv);
}


async function load() {
  const filePath = resolve(program.args[0]);
  const contents = await readFile(filePath, { encoding: 'utf8' });
  return parse(contents, { delimiter: program.opts().csvDelimiter, from_line: 2 })
}

async function updateRule(row) {
  const [lang, ruleDescription, ruleId, _framework, cwe, _doc, remediationMessage] = row
  const filePath = await findRuleFile(ruleId, lang)

  let save = false
  const ruleContents = await readFile(filePath, { encoding: 'utf8' })
  const doc = YAML.parseDocument(ruleContents)

  // update desc node
  const descPath = ["metadata", "description"]
  if(doc.contents.getIn(descPath) != ruleDescription){
    doc.contents.setIn(descPath, ruleDescription)
    save = true
  }

  //udpate cwe node?
  const cwePath = ["metadata", "cwe_id"]
  if(doc.contents.getIn(cwePath).toJS(doc) != [parseInt(cwe)]){
    doc.contents.setIn(cwePath, [parseInt(cwe)])
    save = true
  }

  // update remediation message
  const remediationPath = ["metadata", "remediation_message"]
  if(doc.contents.getIn(remediationPath) != remediationMessage){
    doc.contents.setIn(remediationPath, remediationMessage)
    save = true
  }

  if(save){
    await writeFile(filePath, doc.toString())
  }
}

async function findRuleFile(id, lang) {
  let ruleRemnant = id.substring(lang.length+1)+".yml"
  let path = "./rules/"+lang+"/"
  while(ruleRemnant != null){
    [path, ruleRemnant] = await findInPath(path, ruleRemnant)
  }
  return path
}

async function findInPath(path, ruleRemnant){
  let dirs = await readdir(path)

  for(let dir of dirs) {
    console.log("dir "+dir)
    if(ruleRemnant == dir){
      return [path+ruleRemnant, null]
    }
    if(ruleRemnant.startsWith(dir)){
      ruleRemnant = ruleRemnant.substring(dir.length+1)
      path = path + dir + "/"
      return [path, ruleRemnant]
    }
  }

  throw new Error(path+ruleRemnant+" did not match any rule file")

}


main().catch(err => {
    console.error(err);
    process.exit(1);
});