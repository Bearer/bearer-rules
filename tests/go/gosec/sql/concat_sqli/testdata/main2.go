package main

import (
	"context"
	"database/sql"
	"fmt"
	"os"

	"github.com/lib/pq"
)

func foo1() {
	db, err := sql.Open("sqlite3", ":memory:")
	if err != nil {
		panic(err)
	}
	q := fmt.Sprintf("SELECT * FROM foo where name = '%s'", os.Args[1])
// bearer:expected go_gosec_sql_concat_sqli
	rows, err := db.Query(q)
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
	q := fmt.Sprintf("select * from foo where name = '%s'", os.Args[1])
// bearer:expected go_gosec_sql_concat_sqli
	rows, err := db.Query(q)
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
	q := fmt.Sprintf("select * from foo where name = '%s'", os.Args[1])
// bearer:expected go_gosec_sql_concat_sqli
	rows, err := db.QueryContext(context.Background(), q)
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

func foo5() {
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

func foo6() {
	db, err := sql.Open("sqlite3", ":memory:")
	if err != nil {
		panic(err)
	}
	rows, err := db.Query(staticQuery)
	if err != nil {
		panic(err)
	}
	defer rows.Close()
}

func foo7() {
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

const Table = "foo"

func foo8() {
	db, err := sql.Open("sqlite3", ":memory:")
	if err != nil {
		panic(err)
	}
	q := fmt.Sprintf("SELECT * FROM %s where id = 1", Table)
	rows, err := db.Query(q)
	if err != nil {
		panic(err)
	}
	defer rows.Close()
}

func main() {
	fmt.Sprintln()
}
