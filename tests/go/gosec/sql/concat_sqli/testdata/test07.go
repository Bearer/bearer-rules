// Format string false positive, quoted formatter argument.
package main

import (
	"database/sql"
	"fmt"
	"os"

	"github.com/lib/pq"
)

func main() {
	db, err := sql.Open("postgres", "localhost")
	if err != nil {
		panic(err)
	}
	q := fmt.Sprintf("SELECT * FROM %s where id = 1", pq.QuoteIdentifier(os.Args[1]))
	rows, err := db.Query(q)
	if err != nil {
		panic(err)
	}
	defer rows.Close()
}
