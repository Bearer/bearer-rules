const { exec, execSync, spawn, spawnSync } = require('node:child_process');

exports.handler = async (event, _context) => {
// bearer:expected javascript_lang_os_command_injection
  exec("ls "+event["user_dir"]+"| wc -l", (err, stdout, stderr) => {
    // do something
  });

// bearer:expected javascript_lang_os_command_injection
  execSync("ls "+event["user"]+"| wc -l", (err, stdout, stderr) => {
    // do something
  });

// bearer:expected javascript_lang_os_command_injection
  spawn(event["query"]);

// bearer:expected javascript_lang_os_command_injection
  spawnSync("grep " + event["tmp"])
};
