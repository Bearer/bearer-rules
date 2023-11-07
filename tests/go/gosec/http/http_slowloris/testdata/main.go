package main

import (
	"fmt"
	"net/http"
	"time"
)

func bad() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "Hello, %s!", r.URL.Path[1:])
	})
	err := (&http.Server{
		Addr: ":1234",
	}).ListenAndServe()
	if err != nil {
		panic(err)
	}
}

func ok() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "Hello, %s!", r.URL.Path[1:])
	})
	server := &http.Server{
		Addr:              ":1234",
		ReadHeaderTimeout: 3 * time.Second,
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
		Addr:        ":1234",
		ReadTimeout: 1 * time.Second,
	}
	err := server.ListenAndServe()
	if err != nil {
		panic(err)
	}
}

func ok3() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "Hello, %s!", r.URL.Path[1:])
	})
	server := &http.Server{
		Addr: ":1234",
	}
	// FIXME: unsupported for now
	server.ReadHeaderTimeout = 1 * time.Second
	err := server.ListenAndServe()
	if err != nil {
		panic(err)
	}
}
