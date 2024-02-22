return asyncIsPermitted().then(function (result) {
  if (result === true) {
    return true
  } else {
// bearer:expected javascript_lang_exception
    Promise.reject(new PermissionDenied("fail" + user.email))
  }
})
