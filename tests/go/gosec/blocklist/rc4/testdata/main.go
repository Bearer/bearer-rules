package main

import (
// bearer:expected go_gosec_blocklist_rc4
	"crypto/rc4"
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
