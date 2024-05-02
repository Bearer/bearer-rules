const sqlite3 = require('sqlite3')
const db = new sqlite3.Database(':memory:')

export function searchEmployees(term) {
  return new Promise((resolve, reject) => {
    // bearer:expected javascript_lang_sql_injection
    db.all("SELECT * FROM employees WHERE name LIKE '%"+term+"%'", (err, rows) => {
      if (err) reject(err)
      else resolve(rows)
    })
  })
}