package main

import (
	"fmt"
	"net/http"
	"os"
)

func bad(w http.ResponseWriter, r *http.Request) {
	userInput := r.URL.Query().Get("input")
	// bearer:expected go_lang_cross_site_scripting
	fmt.Fprintf(w, "<html><body>%s</body></html>", userInput)
}

func ok(w http.ResponseWriter, r *http.Request) {
	userInput := r.URL.Query().Get("input")
	// still bad but not really XSS
	fmt.Fprintf(os.Stdout, "<html><body>%s</body></html>", userInput)
}
