import Fs from 'fs';

export function bad(options) {
  const { cwd } = options;
  // bearer:expected javascript_lang_non_literal_fs_filename
  stdioTarget = Fs.createWriteStream(options.writeLogsToPath, 'utf8');

  // bearer:expected javascript_lang_non_literal_fs_filename
  if (!Fs.statSync(cwd).isDirectory()) {
    throw new Error(`cwd "${cwd}" exists but is not a directory`);
  }
}

export function ok() {
  stdioTarget = Fs.createWriteStream('some-string-literal', 'utf8');
}
