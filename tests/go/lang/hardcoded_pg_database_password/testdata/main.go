// Use of bearer:expected go_lang_hardcoded_mysql_database_password to flag expected findings
package main

import (
	"database/sql"
	"fmt"
	"os"

	"github.com/lib/pg"
)

func bad1() {
	options := &pg.Options{
		Addr: ":5432",
		User: "admin123",
		// bearer:expected go_lang_hardcoded_pg_database_password
		Password: "password",
		Database: "db_name",
	}
	db := pg.Connect(options)
}

func bad2() {
	dsn := "postgres://admin123:password@localhost/db_name?sslmode=enable"
	// bearer:expected go_lang_hardcoded_pg_database_password
	db, err = sql.Open("postgres", dsn)
}

func good1() {
	dbUser := os.Getenv("DB_USER")
	dbPassword := os.Getenv("DB_PASSWORD")
	dbName := "myDatabase"

	dsn := fmt.Sprintf("postgres://%s:%s@localhost/%s", dbUser, dbPassword, dbName)

	db, err := sql.Open("postgres", dsn)
	if err != nil {
		panic(err)
	}
	defer db.Close()

	// Database operations go here
	// ...
}

func good2() {
	options := &pg.Options{
		Addr:     ":5432",
		User:     "admin123",
		Password: os.Getenv("DB_PASSWORD"),
		Database: "db_name",
	}
	db := pg.Connect(options)
}
