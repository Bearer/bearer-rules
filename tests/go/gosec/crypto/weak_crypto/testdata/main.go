// License: Apache 2.0 (c) gosec
// source: https://github.com/securego/gosec/blob/master/testutils/source.go
// hash: bfb0f42

package main

import (
	"crypto/des"
	"crypto/md5"
	"crypto/rc4"
	"crypto/sha1"
	"fmt"
)

func mainrc4() {
	k := []byte("super secret key")
	c, err := rc4.NewCipher(k)
	if err != nil {
		return
	}
	out := make([]byte, 0)
	in := []byte("some cleartext")
	c.XORKeyStream(out, in)
	fmt.Printf("Doing something with our data: %v", out)
}

func mainMD55() {
	h := md5.New()
	h.Write([]byte("stuff"))
}

func mainMD5Sum() {
	out := md5.Sum([]byte("stuff"))
	fmt.Println(out)
}

func mainSHA1() {
	h := sha1.New()
	h.Write([]byte("stuff"))
}

func mainSHA1Sum() {
	out := sha1.Sum([]byte("stuff"))
	fmt.Println(out)
}

func maindes() {
	k := []byte("super secret key")
	block, err := des.NewCipher(k)
	if err != nil {
		return
	}
	out := make([]byte, 0)
	in := []byte("cleartext")
	block.Encrypt(out, in)
	decrypted := make([]byte, 0)
	block.Decrypt(decrypted, out)
	fmt.Printf("Doing something with: %s\n", string(decrypted))
}

func main3des() {
	k := []byte("super secret key")
	block, err := des.NewTripleDESCipher(k)
	if err != nil {
		return
	}
	out := make([]byte, 0)
	in := []byte("cleartext")
	block.Encrypt(out, in)
	decrypted := make([]byte, 0)
	block.Decrypt(decrypted, out)
	fmt.Printf("Doing something with: %s\n", string(decrypted))
}
