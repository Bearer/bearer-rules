package main

import (
	"fmt"
	"net/http"
	"time"
)

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

func ok_but_cfg_unsupported() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "Hello, %s!", r.URL.Path[1:])
	})
	server := &http.Server{
		Addr: ":1234",
	}
	// FIXME: unsupported for now
	server.ReadHeaderTimeout = 1 * time.Second
	// bearer:expected go_gosec_http_http_slowloris
	err := server.ListenAndServe()
	if err != nil {
		panic(err)
	}
}

func bad1() {
	router := httprouter.New()

	s := http.Server{
		Addr:    fmt.Sprintf(":%s", config.Cfg.Webport),
		Handler: router,
	}

	// bearer:expected go_gosec_http_http_slowloris
	err := s.ListenAndServe()
	if err != nil {
		panic(err)
	}
}

func bad2() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "Hello, %s!", r.URL.Path[1:])
	})

	// bearer:expected go_gosec_http_http_slowloris
	err := (&http.Server{
		Addr: ":1234",
	}).ListenAndServe()
	if err != nil {
		panic(err)
	}
}
