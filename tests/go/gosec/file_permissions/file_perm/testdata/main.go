package main

import (
	"fmt"
	"io/fs"
	"os"
)

func foo1() {
// bearer:expected go_gosec_file_permissions_file_perm
	err := os.Chmod("/tmp/somefile", 0777) // detected
	if err != nil {
		fmt.Println("Error when changing file permissions!")
		return
	}
}

func foo2() {
// bearer:expected go_gosec_file_permissions_file_perm
	_, err := os.OpenFile("/tmp/thing", os.O_CREATE|os.O_WRONLY, 0666) // detected
	if err != nil {
		fmt.Println("Error opening a file!")
		return
	}
}

func foo3() {
	err := os.Chmod("/tmp/mydir", 0400)
	if err != nil {
		fmt.Println("Error")
		return
	}
}

func foo4() {
	_, err := os.OpenFile("/tmp/thing", os.O_CREATE|os.O_WRONLY, 0600)
	if err != nil {
		fmt.Println("Error opening a file!")
		return
	}
}

func foo5() {
	perms := 0402
// bearer:expected go_gosec_file_permissions_file_perm
	_, err := os.OpenFile("/tmp/thing", os.O_CREATE|os.O_WRONLY, fs.FileMode(perms)) // detected
	if err != nil {
		fmt.Println("Error opening a file!")
		return
	}
}

func foo6(content []byte) {
// bearer:expected go_gosec_file_permissions_file_perm
	err := os.WriteFile("/tmp/thing", content, 0666) // detected
	if err != nil {
		fmt.Println("Error opening a file!")
		return
	}
}
