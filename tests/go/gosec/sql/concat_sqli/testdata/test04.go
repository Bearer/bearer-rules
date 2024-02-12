// Format string without proper quoting with transaction
package main

import (
	"context"
	"database/sql"
	"fmt"
	"os"
)

func main() {
	db, err := sql.Open("sqlite3", ":memory:")
	if err != nil {
		panic(err)
	}
	tx, err := db.Begin()
	if err != nil {
		panic(err)
	}
	defer tx.Rollback()
	q := fmt.Sprintf("select * from foo where name = '%s'", os.Args[1])
	// bearer:expected go_gosec_sql_concat_sqli
	rows, err := tx.QueryContext(context.Background(), q)
	if err != nil {
		panic(err)
	}
	defer rows.Close()
	if err := tx.Commit(); err != nil {
		panic(err)
	}
}
