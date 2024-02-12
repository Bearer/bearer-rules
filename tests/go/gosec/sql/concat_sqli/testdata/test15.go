// false positive
package main

import (
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
	stmt, err := db.Prepare("SELECT * FROM album WHERE id = ?")
	if err != nil {
		log.Fatal(err)
	}
	stmt.QueryRow(fmt.Sprintf("%s", os.Args[1])).Scan(&album)
	if err != nil {
		if err == sql.ErrNoRows {
			log.Fatal(err)
		}
	}
	defer stmt.Close()
}
