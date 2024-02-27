package main

import (
	htmlTemplate "html/template"
	"net/http"
	"os"
	"text/template"
)

func bad(w http.ResponseWriter, r *http.Request) {
	// bearer:expected go_lang_html_tag_injection
	template.New("script").Parse(r.FormValue("q"))
}

func bad2(w http.ResponseWriter, r *http.Request) {
	searchTerm := r.URL.Query().Get("Foo")
	// bearer:expected go_lang_html_tag_injection
	t := template.Must(template.New("ex").Parse(searchTerm))
	v := map[string]interface{}{
		"Title": "Test <b>World</b>",
		"Body":  t,
	}
	t.Execute(os.Stdout, v)
}

func bad3(w http.ResponseWriter, r *http.Request) {
	// bearer:expected go_lang_html_tag_injection
	_ = htmlTemplate.HTML(r.FormValue("x"))
}

func ok(w http.ResponseWriter, r *http.Request) {
	// sanitized
	sanitizedInput := template.HTMLEscapeString(r.FormValue("p"))
	_ = htmlTemplate.HTML(sanitizedInput)
	template.New("script").Parse(sanitizedInput)

	// auto-escaped for html/template
	htmlTemplate.New("script").Parse(r.FormValue("q"))
}
