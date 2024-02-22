package main

import (
	"crypto/tls"
	"fmt"
	"net/http"
)

func mainbadciphersuites() {
	tr := &http.Transport{
		TLSClientConfig: &tls.Config{CipherSuites: []uint16{
// bearer:expected go_gosec_crypto_weak_tls_version
			tls.VersionTLS11,
// bearer:expected go_gosec_crypto_weak_tls_version
			tls.VersionTLS10,
		}},
	}

	client := &http.Client{Transport: tr}
	_, err := client.Get("https://golang.org/")
	if err != nil {
		fmt.Println(err)
	}
}
