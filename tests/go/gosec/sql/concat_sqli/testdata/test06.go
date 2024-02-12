// Format string false positive
package main

import (
	"database/sql"
)

const staticQuery = "SELECT * FROM foo WHERE age < 32"

func main() {
	db, err := sql.Open("sqlite3", ":memory:")
	if err != nil {
		panic(err)
	}
	rows, err := db.Query(staticQuery)
	if err != nil {
		panic(err)
	}
	defer rows.Close()
}
