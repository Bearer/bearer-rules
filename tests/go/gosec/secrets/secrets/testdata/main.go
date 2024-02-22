package main

import "fmt"

func bad1() {
	username := "admin"
// bearer:expected go_gosec_secrets_secrets
	var password = "f62e5bcda4fae4f82370da0c6f20697b8f8447ef"

	fmt.Println("Doing something with: ", username, password)
}

func bad2() {
	username := "admin"
	var password string
// bearer:expected go_gosec_secrets_secrets
	password = "f62e5bcda4fae4f82370da0c6f20697b8f8447ef"

	fmt.Println("Doing something with: ", username, password)
}

func bad3() {
	username := "admin"
// bearer:expected go_gosec_secrets_secrets
	password := "f62e5bcda4fae4f82370da0c6f20697b8f8447ef"

	fmt.Println("Doing something with: ", username, password)
}
