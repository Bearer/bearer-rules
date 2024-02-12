// Format string with \n\r
package main

import (
	"database/sql"
	"fmt"
	"os"
)

func main() {
	db, err := sql.Open("sqlite3", ":memory:")
	if err != nil {
		panic(err)
	}
	q := fmt.Sprintf("SELECT * FROM foo where\n name = '%s'", os.Args[1])
	// bearer:expected go_gosec_sql_concat_sqli
	rows, err := db.Query(q)
	if err != nil {
		panic(err)
	}
	defer rows.Close()
}
