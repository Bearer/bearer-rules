// multiple string concatenation
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
	// bearer:expected go_gosec_sql_concat_sqli
	rows, err := db.Query("SELECT * FROM foo" + "WHERE name = " + os.Args[1])
	if err != nil {
		panic(err)
	}
	defer rows.Close()
}
