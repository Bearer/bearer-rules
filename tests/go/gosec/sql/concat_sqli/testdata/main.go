package main

import (
	"context"
	"database/sql"
	"fmt"
	"os"
)

func foo1() {
	db, err := sql.Open("sqlite3", ":memory:")
	if err != nil {
		panic(err)
	}
// bearer:expected go_gosec_sql_concat_sqli
	rows, err := db.Query("SELECT * FROM foo WHERE name = " + os.Args[1])
	if err != nil {
		panic(err)
	}
	defer rows.Close()
}

func foo2() {
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

func foo3() {
	db, err := sql.Open("sqlite3", ":memory:")
	if err != nil {
		panic(err)
	}
// bearer:expected go_gosec_sql_concat_sqli
	rows, err := db.QueryContext(context.Background(), "select * from foo where name = "+os.Args[1])
	if err != nil {
		panic(err)
	}
	defer rows.Close()
}

func foo4() {
	db, err := sql.Open("sqlite3", ":memory:")
	if err != nil {
		panic(err)
	}
	tx, err := db.Begin()
	if err != nil {
		panic(err)
	}
	defer tx.Rollback()
// bearer:expected go_gosec_sql_concat_sqli
	rows, err := tx.QueryContext(context.Background(), "select * from foo where name = "+os.Args[1])
	if err != nil {
		panic(err)
	}
	defer rows.Close()
	if err := tx.Commit(); err != nil {
		panic(err)
	}
}

func foo5() {
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

func foo6() {
	var staticQuery1 = "SELECT * FROM foo WHERE age < "
	db, err := sql.Open("sqlite3", ":memory:")
	if err != nil {
		panic(err)
	}
	rows, err := db.Query(staticQuery1 + "32")
	if err != nil {
		panic(err)
	}
	defer rows.Close()
}

const age = "32"
const gender = "M"

func foo7() {
	var staticQuery2 = "SELECT * FROM foo WHERE age < "
	db, err := sql.Open("sqlite3", ":memory:")
	if err != nil {
		panic(err)
	}
	rows, err := db.Query(staticQuery2 + age)
	if err != nil {
		panic(err)
	}
	defer rows.Close()
}

func foo8() {
	db, err := sql.Open("sqlite3", ":memory:")
	if err != nil {
		panic(err)
	}
	rows, err := db.Query("SELECT * FROM foo WHERE gender = " + gender)
	if err != nil {
		panic(err)
	}
	defer rows.Close()
}

func foo9() {
	gender := os.Args[0]
	db, err := sql.Open("sqlite3", ":memory:")
	if err != nil {
		panic(err)
	}
	rows, err := db.Query("SELECT * FROM foo WHERE gender = ?", gender)
	if err != nil {
		panic(err)
	}
	defer rows.Close()
}

var DB *sql.DB
var err error

func foo10(uid string) {
	DB, err = database.Connect()

	getProfileSql := fmt.Sprintf(`SELECT p.user_id, p.full_name, p.city, p.phone_number
								FROM Profile as p,Users as u
								where p.user_id = u.id
								and u.id=%s`, uid) //here is the vulnerable query
// bearer:expected go_gosec_sql_concat_sqli
	rows, err := DB.Query(getProfileSql)
}
