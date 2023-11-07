package main

import (
	"fmt"
	"log"
	"net"
	"net/http"
	"time"
)

func bad() {
	err := http.ListenAndServe(":8443", nil)
	log.Fatal(err)
}

func bad2() {
	err := http.ListenAndServeTLS(":8443", "cert.pem", "key.pem", nil)
	log.Fatal(err)
}

func bad3() {
	l, err := net.Listen("tcp", ":8080")
	if err != nil {
		log.Fatal(err)
	}
	defer l.Close()
	err = http.Serve(l, nil)
	log.Fatal(err)
}

func bad4() {
	l, err := net.Listen("tcp", ":8443")
	if err != nil {
		log.Fatal(err)
	}
	defer l.Close()
	err = http.ServeTLS(l, nil, "cert.pem", "key.pem")
	log.Fatal(err)
}

func bad5() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "Hello, %s!", r.URL.Path[1:])
	})
	server := &http.Server{
		Addr: ":1234",
	}
	err := server.ListenAndServe()
	if err != nil {
		panic(err)
	}
}

func ok() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "Hello, %s!", r.URL.Path[1:])
	})
	server := &http.Server{
		Addr:        ":1234",
		ReadTimeout: 1 * time.Second,
	}
	err := server.ListenAndServe()
	if err != nil {
		panic(err)
	}
}

func ok2() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "Hello, %s!", r.URL.Path[1:])
	})
	server := &http.Server{
		Addr:              ":1234",
		ReadHeaderTimeout: 1 * time.Second,
	}
	err := server.ListenAndServe()
	if err != nil {
		panic(err)
	}
}
