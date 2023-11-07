package main

import (
	"crypto/md5"
	"fmt"
)

func mainMD55() {
	h := md5.New()
	h.Write([]byte("stuff"))
}

func mainMD5Sum() {
	out := md5.Sum([]byte("stuff"))
	fmt.Println(out)
}
