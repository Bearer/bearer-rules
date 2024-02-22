package main

import (
	"crypto/rand"
	"crypto/rsa"
	"fmt"
)

func mainweakkey() {
	//Generate Private Key
// bearer:expected go_gosec_crypto_weak_key_strength
	pvk, err := rsa.GenerateKey(rand.Reader, 1024)
	if err != nil {
		fmt.Println(err)
	}
	fmt.Println(pvk)
}
