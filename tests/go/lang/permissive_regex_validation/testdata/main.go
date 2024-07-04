// Use bearer:expected go_lang_permissive_regex_validation to flag expected findings
package main

import (
	"regexp"
)

func permissiveRegex(input string) {
	re := regexp.MustCompile("[a-zA-Z0-9]*")

	// likely not validation - we ignore this
	re.ReplaceAllString(input, "foo")

	// bearer:expected go_lang_permissive_regex_validation
	re.Match([]byte(input))
	// bearer:expected go_lang_permissive_regex_validation
	re.MatchString(input)
}

func goodRegexp(input string) {
	re := regexp.MustCompile(`\A[a-zA-Z0-9]*\z`)
	if re.MatchString(input) {
		// continue with valid string
	} else {
		// handle invalid string
	}
}
