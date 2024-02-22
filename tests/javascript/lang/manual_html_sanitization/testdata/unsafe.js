// bearer:expected javascript_lang_manual_html_sanitization
const sanitizedUserInput = user.Input.replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const html = `<strong>${sanitizedUserInput}</strong>`;
