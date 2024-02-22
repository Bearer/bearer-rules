package main

import (
	"html/template"
	"os"
)

const tmpl = ""

func foo1() {
	t := template.Must(template.New("ex").Parse(tmpl))
	v := map[string]interface{}{
		"Title": "Test <b>World</b>",
		"Body":  template.HTML("<script>alert(1)</script>"),
	}
	t.Execute(os.Stdout, v)
}

func foo2(a string) {
	t := template.Must(template.New("ex").Parse(tmpl))
	v := map[string]interface{}{
		"Title": "Test <b>World</b>",
// bearer:expected go_gosec_injection_template_injection
		"Body":  template.HTML(a),
	}
	t.Execute(os.Stdout, v)
}

func foo3(a string) {
	t := template.Must(template.New("ex").Parse(tmpl))
	v := map[string]interface{}{
		"Title": "Test <b>World</b>",
// bearer:expected go_gosec_injection_template_injection
		"Body":  template.JS(a),
	}
	t.Execute(os.Stdout, v)
}

func foo4(a string) {
	t := template.Must(template.New("ex").Parse(tmpl))
	v := map[string]interface{}{
		"Title": "Test <b>World</b>",
// bearer:expected go_gosec_injection_template_injection
		"Body":  template.URL(a),
	}
	t.Execute(os.Stdout, v)
}
