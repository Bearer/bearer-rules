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
      dataSet = await load()
      await Promise.all(dataSet.map(updateRule))
    });

    await program.parseAsync(process.argv);
}


async function load() {
  const data = {}
  const filePath = resolve(program.args[0]);
  const contents = await readFile(filePath, { encoding: 'utf8' });
  return parse(contents, { delimiter: program.opts().csvDelimiter, from_line: 2 })
}

async function updateRule(row) {
  const [lang, rule_description, rule_id, _framework, cwe, _doc] = row
  const filePath = await findRuleFile(rule_id, lang)
  let save = false
  const ruleContents = await readFile(filePath, { encoding: 'utf8' })
  const doc = YAML.parseDocument(ruleContents)

  // update desc node
  const desc_path = ["metadata", "description"]
  if(doc.contents.getIn(desc_path) != rule_description){
    doc.contents.setIn(desc_path, rule_description)
    save = true
  }

  //udpate cwe node?
  const cwe_path = ["metadata", "cwe_id"]
  if(doc.contents.getIn(cwe_path).toJS(doc) != [parseInt(cwe)]){
    doc.contents.setIn(cwe_path, [parseInt(cwe)])
    save = true
  }

  if(save){
    await writeFile(filePath, doc.toString())
  }
}

async function findRuleFile(id, lang) {
  let ruleRemenant = id.substring(lang.length+1)+".yml"
  let path = "./rules/"+lang+"/"
  while(ruleRemenant != null){
    [path, ruleRemenant] = await findInPath(path, ruleRemenant)
  }
  return path
}

async function findInPath(path, ruleRemenant){
  let dirs = await readdir(path)

  for(let dir of dirs) {
    if(ruleRemenant == dir){
      return [path+ruleRemenant, null]
    }
    if(ruleRemenant.startsWith(dir)){
      ruleRemenant = ruleRemenant.substring(dir.length+1)
      path = path + dir + "/"
      return [path, ruleRemenant]
    }
  }

  throw new Error(path+":"+ruleRemenant+" did not match any rule file")

}


main().catch(err => {
    console.error(err);
    process.exit(1);
});