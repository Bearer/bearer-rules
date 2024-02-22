package main

import (
// bearer:expected go_gosec_blocklist_des
	"crypto/des"
	"fmt"
)

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
