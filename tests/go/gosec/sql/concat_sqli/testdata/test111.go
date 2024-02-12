// Exec match
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
	// bearer:expected go_gosec_sql_concat_sqli
	result, err := db.Exec("select * from foo where name = " + os.Args[1])
	if err != nil {
		panic(err)
	}
	fmt.Println(result)
}
