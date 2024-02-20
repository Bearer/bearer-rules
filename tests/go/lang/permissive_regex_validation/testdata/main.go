// Use bearer:expected go_lang_permissive_regex_validation to flag expected findings
package main

import (
	"regexp"
)

func bad() {
	// bearer:expected go_lang_permissive_regex_validation
	_ = regexp.MustCompile("[a-zA-Z0-9]*")
}

func good() {
	_ = regexp.MustCompile(`\A[a-zA-Z0-9]*\z`)
}
