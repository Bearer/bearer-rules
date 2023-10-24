// License: Apache 2.0 (c) gosec
// source: https://github.com/securego/gosec/blob/master/testutils/source.go
// hash: bfb0f42

// Input from the std in is considered insecure
package main

import (
	"bufio"
	"bytes"
	"fmt"
	"io/ioutil"
	"net/http"
	"os"
)

func foo1() {
	in := bufio.NewReader(os.Stdin)
	url, err := in.ReadString('\n')
	if err != nil {
		panic(err)
	}
	resp, err := http.Get(url)
	if err != nil {
		panic(err)
	}
	defer resp.Body.Close()
	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		panic(err)
	}
	fmt.Printf("%s", body)
}

var url string = "https://www.google.com"

func foo2() {
	resp, err := http.Get(url)
	if err != nil {
		panic(err)
	}
	defer resp.Body.Close()
	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		panic(err)
	}
	fmt.Printf("%s", body)
}

func foo3() {
	url := os.Getenv("tainted_url")
	resp, err := http.Get(url)
	if err != nil {
		panic(err)
	}
	defer resp.Body.Close()
	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		panic(err)
	}
	fmt.Printf("%s", body)
}

const url1 = "http://127.0.0.1"

func foo4() {
	resp, err := http.Get(url1)
	if err != nil {
		fmt.Println(err)
	}
	fmt.Println(resp.Status)
}

func foo5() {
	var url string = "http://127.0.0.1"
	resp, err := http.Get(url)
	if err != nil {
		fmt.Println(err)
	}
	fmt.Println(resp.Status)
}

func foo6() {
	url := "http://127.0.0.1"
	resp, err := http.Get(url)
	if err != nil {
		fmt.Println(err)
	}
	fmt.Println(resp.Status)
}

func foo7() {
	url1 := "test"
	var url2 string = "http://127.0.0.1"
	url2 = url1
	resp, err := http.Get(url2)
	if err != nil {
		fmt.Println(err)
	}
	fmt.Println(resp.Status)
}

var Url string

func foo8() {
	resp, err := http.Get(Url)
	if err != nil {
		fmt.Println(err)
	}
	fmt.Println(resp.Status)
}

func get(url string) {
	resp, err := http.Get(url)
	if err != nil {
		fmt.Println(err)
	}
	fmt.Println(resp.Status)
}

func foo9() {
	url := "http://127.0.0.1"
	get(url)
}

func foo10() {
	url := os.Args[0]
	var q = []byte(`your query`)
	req, err := http.NewRequest("POST", url, bytes.NewBuffer(q))
	req.Header.Set("X-Custom-Header", "myvalue")
	req.Header.Set("Content-Type", "text/plain")

	client := &http.Client{}
	client.Do(req)
}
