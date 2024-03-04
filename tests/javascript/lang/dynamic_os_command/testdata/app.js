// Use bearer:expected javascript_lang_dynamic_os_command to flag expected findings
const { exec, execSync, spawn, spawnSync } = require("child_process")

exports.handler = async (folder, _context) => {
  // bearer:expected javascript_lang_dynamic_os_command
  exec("ls " + folder + "| wc -l", (err, stdout, stderr) => {
    // do something
  })

  // bearer:expected javascript_lang_dynamic_os_command
  execSync("ls " + folder + "| wc -l", (err, stdout, stderr) => {
    // do something
  })

  // bearer:expected javascript_lang_dynamic_os_command
  spawn(`ls ${folder}`)

  // bearer:expected javascript_lang_dynamic_os_command
  spawnSync("grep " + folder)
}
