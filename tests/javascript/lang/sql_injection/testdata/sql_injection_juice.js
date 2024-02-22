module.exports = function login() {
  function afterLogin(user, res, next) {
    return (req, _res, next) => {
// bearer:expected javascript_lang_sql_injection
      models.sequelize
        .query(
          `SELECT * FROM Users WHERE email = '${
            req.body.email || ""
          }' AND password = '${security.hash(
            req.body.password || ""
          )}' AND deletedAt IS NULL`,
          { model: UserModel, plain: true }
        )
        .catch((error) => {
          next(error)
        })
    }
  }
}
