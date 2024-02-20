// Use bearer:expected go_lang_ssl_verification to flag expected findings
package main

import (
	"crypto/tls"
	"fmt"
	"net/http"
)

func bad1() {
	tr := &http.Transport{
		TLSClientConfig: &tls.Config{
			// bearer:expected go_lang_ssl_verification
			InsecureSkipVerify: true, // BAD: Disables SSL/TLS verification
		},
	}
	client := &http.Client{Transport: tr}

	resp, err := client.Get("https://example.com")
	if err != nil {
		fmt.Println("Error:", err)
		return
	}
	defer resp.Body.Close()

	fmt.Println("Response status:", resp.Status)
}

func bad2() {
	config := &tls.Config{}
	// bearer:expected go_lang_ssl_verification
	config.InsecureSkipVerify = true

	tr := &http.Transport{
		TLSClientConfig: config,
	}

	client := &http.Client{Transport: tr}

	resp, err := client.Get("https://example.com")
	if err != nil {
		fmt.Println("Error:", err)
		return
	}
	defer resp.Body.Close()

	fmt.Println("Response status:", resp.Status)
}

func good() {
	config := &tls.Config{}
	tr := &http.Transport{
		TLSClientConfig: config,
	}

	client := &http.Client{Transport: tr}

	resp, err := client.Get("https://example.com")
	if err != nil {
		fmt.Println("Error:", err)
		return
	}
	defer resp.Body.Close()

	fmt.Println("Response status:", resp.Status)
}
