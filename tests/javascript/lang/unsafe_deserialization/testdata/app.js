const YAML = require('yaml');
const yaml = require('js-yaml');

// bearer:expected javascript_lang_unsafe_deserialization
YAML.parse(`/path/${req.params.yamlFilePath}`)
// bearer:expected javascript_lang_unsafe_deserialization
YAML.parseDocument(req.params.yamlFilePath)
// bearer:expected javascript_lang_unsafe_deserialization
const obj = yaml.load(`/path/${req.params.yamlFilePath}`);

// ok
yaml.load("known/path")
// ok
YAML.parse({hello: "world"})