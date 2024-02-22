function main() {
  const result = new Promise(function (resolve, reject) {
    setTimeout(() => {
      const user = {
        email: current_user.email,
      }
// bearer:expected javascript_lang_exception
      reject("Error with user " + user)
    }, 2000)
  })

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = {
        email: current_user.email,
      }
// bearer:expected javascript_lang_exception
      reject("Error with user " + user)
    }, 2000)
  })
}
