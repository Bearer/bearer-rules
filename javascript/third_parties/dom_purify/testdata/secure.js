const config = { RETURN_DOM_FRAGMENT: true };
let html = DOMPurify.sanitize(dirty, config);
document.body.innerHTML = html;
