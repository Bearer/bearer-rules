// false positive
package main

import (
	"database/sql"
)

var staticQuery = "SELECT * FROM foo WHERE age < "

func main() {
	db, err := sql.Open("sqlite3", ":memory:")
	if err != nil {
		panic(err)
	}
	rows, err := db.Query(staticQuery + "32")
	if err != nil {
		panic(err)
	}
	defer rows.Close()
}
