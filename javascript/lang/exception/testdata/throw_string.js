return asyncIsPermitted().then(function (result) {
  if (result === true) {
    throw `${user.email ? ok : ok}`
  } else {
    throw `${user.email}`
  }
})
