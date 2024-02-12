package main

import (
	"database/sql"
)

const age = "32"

var staticQuery = "SELECT * FROM foo WHERE age < "

func main() {
	db, err := sql.Open("sqlite3", ":memory:")
	if err != nil {
		panic(err)
	}
	rows, err := db.Query(staticQuery + age)
	if err != nil {
		panic(err)
	}
	defer rows.Close()
}
