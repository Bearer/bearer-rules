const config = {};
// bearer:expected javascript_third_parties_dom_purify
const html = DOMPurify.sanitize(dirty, config);
document.body.innerHTML = html;

// bearer:expected javascript_third_parties_dom_purify
const body = DOMPurify.sanitize(dirty);