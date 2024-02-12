// Format string false positive, safe string spec.
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
	q := fmt.Sprintf("SELECT * FROM foo where id = %d", os.Args[1])
	rows, err := db.Query(q)
	if err != nil {
		panic(err)
	}
	defer rows.Close()
}
