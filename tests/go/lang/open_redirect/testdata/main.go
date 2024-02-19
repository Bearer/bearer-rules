package main

import (
	"net/http"
)

func redirectHandler(w http.ResponseWriter, r *http.Request) {
	// Directly using user input for redirection
	redirectURL := r.URL.Query().Get("url")
	if redirectURL != "" {
		// bearer:expected go_lang_open_redirect
		http.Redirect(w, r, redirectURL, http.StatusFound)
		return
	}
	http.NotFound(w, r)
}

func main() {
	http.HandleFunc("/", redirectHandler)
	http.ListenAndServe(":8080", nil)
}
