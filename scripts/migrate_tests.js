const fs = require('fs');
const path = require('path');
const args = process.argv;
const rule_dir = args[2]

const rs = fs.readdirSync(rule_dir)


const extract_json = (snap_path) => {
  console.log("Processing",snap_path)
  const snap_data = require("../"+snap_path)
  let out = {}
  Object.keys(snap_data).forEach((key) => {
    const str = snap_data[key].trim()
    const collected_output = str.substring(1, str.length - 1)
    if(collected_output){
      out[key] = JSON.parse(collected_output)
    }
  })
  return out
}

const determine_annotations = (rule, outputs) => {
  annotations = {}
  Object.keys(outputs).forEach((test_key) => {
    result_set = outputs[test_key]
    test_name = test_key.split(" ")[1]
    Object.keys(result_set).forEach((level) => {
      result_set[level].forEach((result) => {
        annotate = path.join("./",rule_dir, rule, "testdata/", result.full_filename.replace("/tmp/bearer-scan/",""));
        if(annotations[annotate]){
          annotations[annotate].push(result)
        }else{
          annotations[annotate] = [result]
        }
      })
    })
  })
  return annotations
}

const write_annoation = (filePath, result) => {
  let lines = fs.readFileSync(filePath, 'utf8').split('\n');
  lines.splice(result.line_number - 1, 0, `// bearer:expected ${result.id}`);
  fs.writeFileSync(filePath, lines.join('\n'));
}

const test_template = (case_string) => (
  `const {
  createNewInvoker,
  getEnvironment,
} = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createNewInvoker(ruleId, ruleFile, testBase)

  ${case_string}
})`
)

const test_item_template = (filename) => (
  `
    test("${filename.replace(/\.[^/.]+$/, "")}", () => {
      const testCase = "${filename}"

      const results = invoke(testCase)

      expect(results.Missing).toEqual([])
      expect(results.Extra).toEqual([])
    })
  `
)

rs.forEach((rule)=>{
  snap_path = path.join(rule_dir, rule, "__snapshots__/test.js.snap");
  if(fs.existsSync(snap_path)){
    outputs = extract_json(snap_path)
    to_annotate = determine_annotations(rule, outputs)
    Object.keys(to_annotate).forEach((filename) => {
      to_annotate[filename].sort().reverse().forEach((result) => {
        write_annoation(filename, result)
      })
    })

    const cases = fs.readdirSync(path.join(rule_dir, rule,"testdata")).map((test_case_file) => test_item_template(test_case_file))

    fs.writeFileSync(
      path.join(rule_dir, rule, "test.js"),
      test_template(cases.join("\n"))
    )

    fs.rmdirSync(
      path.join(rule_dir, rule, "__snapshots__"),
      {recursive: true}
    )
  }
  console.log(snap_path,  fs.existsSync(snap_path))
})



