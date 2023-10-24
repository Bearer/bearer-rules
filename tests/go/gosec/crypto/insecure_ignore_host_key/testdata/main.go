package main

import (
	"golang.org/x/crypto/ssh"
)

func main() {
	_ = ssh.InsecureIgnoreHostKey()
}
