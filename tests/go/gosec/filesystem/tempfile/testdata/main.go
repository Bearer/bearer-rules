package main

import (
	"fmt"
	"io/ioutil"
	"log"
	"os"
)

func foo1() {
// bearer:expected go_gosec_filesystem_tempfile
	err := ioutil.WriteFile("/tmp/demo2", []byte("This is some data"), 0644)
	if err != nil {
		fmt.Println("Error while writing!")
	}
}

func foo2() {
// bearer:expected go_gosec_filesystem_tempfile
	err := os.WriteFile("/tmp/demo2", []byte("This is some data"), 0644)
	if err != nil {
		fmt.Println("Error while writing!")
	}
}

func foo3() {
	path := "/tmp/demo"
// bearer:expected go_gosec_filesystem_tempfile
	err := os.WriteFile(path, []byte("This is some data"), 0644)
	if err != nil {
		fmt.Println("Error while writing!")
	}
}

func foo4() {
	if err := os.MkdirAll("/opt/appdir/restricted", 0700); err != nil {
		log.Fatal(err)
	}

	f, err := os.CreateTemp("/opt/appdir/restricted", "temp-*.txt")
	if err != nil {
		log.Fatal(err)
	}

	defer f.Close()
	defer os.Remove(f.Name())
}
