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

export function bad2(options) {
  // bearer:expected javascript_lang_non_literal_fs_filename
  Fs.copyFileSync(options.filePath, 'some-new-filepath.txt', 'utf8');

  // bearer:expected javascript_lang_non_literal_fs_filename
  Fs.symlink('some-filepath.txt', options.filePath, 'utf8');

  // bearer:expected javascript_lang_non_literal_fs_filename
  Fs.rename(options.filePath, options.newFilePath);
}

export function ok() {
  stdioTarget = Fs.createWriteStream('some-string-literal', 'utf8');
}

export function ok2(data, encoding) {
  stdioTarget = Fs.createWriteStream('some-string-literal', data, encoding);
}

export function ok3(data) {
  Fs.symlink('some-filepath.txt', 'some-other-filepath.txt', data.options);
}