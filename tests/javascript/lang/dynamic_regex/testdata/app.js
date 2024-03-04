// Use bearer:expected javascript_lang_dynamic_regex to flag expected findings
function ok(name) {
  const reg = new RegExp("\\w+")
  return reg.exec(name)
}

function bad(name) {
  // bearer:expected javascript_lang_dynamic_regex
  const reg = new RegExp("\\w+" + name)
  return reg.exec(name)
}

function ok2(name) {
  const exp = /a.*/
  const reg = new RegExp(exp)
  return reg.exec(name)
}
