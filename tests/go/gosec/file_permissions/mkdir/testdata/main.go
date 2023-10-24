package main

import (
	"fmt"
	"os"
)

func foo0() {
	err := os.Mkdir("/tmp/mydir", 0700)
	if err != nil {
		fmt.Println("Error when creating a directory!")
		return
	}
}

func foo1() {
	err := os.Mkdir("/tmp/mydir", 0777)
	if err != nil {
		fmt.Println("Error when creating a directory!")
		return
	}
}

func foo2() {
	err := os.MkdirAll("/tmp/mydir", 0777)
	if err != nil {
		fmt.Println("Error when creating a directory!")
		return
	}
}

func foo3() {
	err := os.Mkdir("/tmp/mydir", 0600)
	if err != nil {
		fmt.Println("Error when creating a directory!")
		return
	}
}

func foo4() {
	err := os.Mkdir("/tmp/mydir", 0750)
	if err != nil {
		fmt.Println("Error when creating a directory!")
		return
	}
}
