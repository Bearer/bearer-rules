// Use bearer:expected go_lang_hardcoded_database_password to flag expected findings
package main

import (
	"database/sql"
	"fmt"
	"os"

	"github.com/go-sql-driver/mysql"
)

func bad1() {
	// Hard-coded credentials are a serious security risk
	dbUser := "admin"
	dbPassword := "admin123"
	dbName := "myDatabase"
	port := 3306

	// Building the DSN (Data Source Name) with hard-coded credentials
	dsn := fmt.Sprintf("%s:%s@tcp(localhost:%d)/%s?charset=utf8", dbUser, dbPassword, port, dbName)

	// Connect to the database
	// bearer:expected go_lang_hardcoded_database_password
	db, err := sql.Open("mysql", dsn)
	if err != nil {
		panic(err)
	}
	defer db.Close()

	// Database operations go here
	// ...
}

func bad1() {
	cfg := mysql.Config{
		User: "user",
		// bearer:expected go_lang_hardcoded_database_password
		Passwd: "password",
		Net:    "tcp",
		Addr:   "127.0.0.1:3306",
		DBName: "recordings",
	}

	// Connect to the database
	db, err := sql.Open("mysql", cfg.FormatDSN())
	if err != nil {
		panic(err)
	}
	defer db.Close()

	// Database operations go here
	// ...
}

func good1() {
	dbUser := os.Getenv("DB_USER")
	dbPassword := os.Getenv("DB_PASSWORD") // Get the password from an environment variable
	dbName := "myDatabase"

	dsn := fmt.Sprintf("%s:%s@tcp(localhost:3306)/%s?charset=utf8", dbUser, dbPassword, dbName)

	db, err := sql.Open("mysql", dsn)
	if err != nil {
		panic(err)
	}
	defer db.Close()

	// Database operations go here
	// ...
}

func good2() {
	cfg := mysql.Config{
		User:   os.Getenv("DB_USER"),
		Passwd: os.Getenv("DB_PASSWORD"),
		Net:    "tcp",
		Addr:   "127.0.0.1:3306",
		DBName: "myDatabase",
	}

	// Connect to the database
	db, err := sql.Open("mysql", cfg.FormatDSN())
	if err != nil {
		panic(err)
	}
	defer db.Close()

	// Database operations go here
	// ...
}
