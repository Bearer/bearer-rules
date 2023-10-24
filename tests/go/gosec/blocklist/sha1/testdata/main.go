package main

import (
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
