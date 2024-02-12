// SQLI by db.PrepareContext(some)
package main

import (
	"context"
	"database/sql"
	"fmt"
	"log"
	"os"
)

const Table = "foo"

func main() {
	var album string
	db, err := sql.Open("sqlite3", ":memory:")
	if err != nil {
		panic(err)
	}
	q := fmt.Sprintf("SELECT name FROM users where '%s' = ?", os.Args[1])
	// bearer:expected go_gosec_sql_concat_sqli
	stmt, err := db.PrepareContext(context.Background(), q)
	if err != nil {
		log.Fatal(err)
	}
	stmt.QueryRow(fmt.Sprintf("%s", os.Args[2])).Scan(&album)
	if err != nil {
		if err == sql.ErrNoRows {
			log.Fatal(err)
		}
	}
	defer stmt.Close()
}
