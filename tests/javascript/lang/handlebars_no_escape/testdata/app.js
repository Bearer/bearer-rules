import Handlebars from 'handlebars';

const handlebars = Handlebars.create();

export function bad(templateStr) {
  try {
    // bearer:expected javascript_lang_handlebars_no_escape
    const template = handlebars.compile(templateStr, { noEscape: true });

    compiledTemplate = template(vars);
  } catch (err) {
    // ...
  }
}

export function ok(templateStr) {
  try {
    const template = handlebars.compile(templateStr, { noEscape: false });
    compiledTemplate = template(vars);
  } catch (err) {
    // ...
  }
}