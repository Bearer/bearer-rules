// case insensitive match
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
	rows, err := db.Query("select * from foo where name = " + os.Args[1])
	if err != nil {
		panic(err)
	}
	defer rows.Close()
}
