// License: MIT (c) GitLab Inc.

package main

import (
	net2 "net/http"
)

func dtrav() {
// bearer:expected go_gosec_filesystem_dirtraversal
	d := net2.Dir("/")
	f, err := d.Open("some file")
	if err != nil {
		panic(err)
	}
	defer f.Close()
}
