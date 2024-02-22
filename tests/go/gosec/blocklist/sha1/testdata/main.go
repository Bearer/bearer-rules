package main

import (
// bearer:expected go_gosec_blocklist_sha1
	"crypto/sha1"
	"fmt"
)

func mainSHA1() {
	h := sha1.New()
	h.Write([]byte("stuff"))
}

func mainSHA1Sum() {
	out := sha1.Sum([]byte("stuff"))
	fmt.Println(out)
}
