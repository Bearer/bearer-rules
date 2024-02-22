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
// bearer:expected go_gosec_crypto_weak_crypto
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
// bearer:expected go_gosec_crypto_weak_crypto
	h := md5.New()
	h.Write([]byte("stuff"))
}

func mainMD5Sum() {
// bearer:expected go_gosec_crypto_weak_crypto
	out := md5.Sum([]byte("stuff"))
	fmt.Println(out)
}

func mainSHA1() {
// bearer:expected go_gosec_crypto_weak_crypto
	h := sha1.New()
	h.Write([]byte("stuff"))
}

func mainSHA1Sum() {
// bearer:expected go_gosec_crypto_weak_crypto
	out := sha1.Sum([]byte("stuff"))
	fmt.Println(out)
}

func maindes() {
	k := []byte("super secret key")
// bearer:expected go_gosec_crypto_weak_crypto
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
// bearer:expected go_gosec_crypto_weak_crypto
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
