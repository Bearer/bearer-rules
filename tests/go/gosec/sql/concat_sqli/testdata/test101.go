// infixed concatenation
package main

import (
	"database/sql"
	"os"
)

func main() {
	db, err := sql.Open("sqlite3", ":memory:")
	if err != nil {
		panic(err)
	}

	q := "INSERT INTO foo (name) VALUES ('" + os.Args[0] + "')"
	// bearer:expected go_gosec_sql_concat_sqli
	rows, err := db.Query(q)
	if err != nil {
		panic(err)
	}
	defer rows.Close()
}
