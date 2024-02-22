return asyncIsPermitted().then(function (result) {
  if (result === true) {
    throw `${user.email ? ok : ok}`
  } else {
// bearer:expected javascript_lang_exception
    throw `${user.email}`
  }
})
