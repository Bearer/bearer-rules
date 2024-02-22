return asyncIsPermitted().then(function (result) {
  if (result === true) {
    return true
  } else {
// bearer:expected javascript_lang_exception
    throw new PermissionDenied(`Error with ${current_user.email}`)
  }
})
