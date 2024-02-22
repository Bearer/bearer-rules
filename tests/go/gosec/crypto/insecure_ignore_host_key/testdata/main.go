package main

import (
	"golang.org/x/crypto/ssh"
)

func main() {
// bearer:expected go_gosec_crypto_insecure_ignore_host_key
	_ = ssh.InsecureIgnoreHostKey()
}
