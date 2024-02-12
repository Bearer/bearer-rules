package main

import (
	"database/sql"
	"fmt"
)

const gender = "M"
const age = "32"

var staticQuery = "SELECT * FROM foo WHERE age < "

func main() {
	db, err := sql.Open("sqlite3", ":memory:")
	if err != nil {
		panic(err)
	}
	result, err := db.Exec("SELECT * FROM foo WHERE gender = " + gender)
	if err != nil {
		panic(err)
	}
	fmt.Println(result)
}
