package main

import (
	"crypto/tls"
	"fmt"
	"net/http"
)

func mainbadciphersuites() {
	tr := &http.Transport{
// bearer:expected go_gosec_crypto_bad_tls_settings
		TLSClientConfig: &tls.Config{CipherSuites: []uint16{tls.TLS_RSA_WITH_AES_128_GCM_SHA256, tls.TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256}},
	}

// bearer:expected go_gosec_crypto_bad_tls_settings
	cipher := tls.CipherSuite{
		ID: tls.TLS_AES_128_GCM_SHA256,
	}

	client := &http.Client{Transport: tr}
	_, err := client.Get("https://golang.org/")
	if err != nil {
		fmt.Println(err)
	}
}
