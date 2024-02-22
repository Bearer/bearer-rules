package main

import (
// bearer:expected go_gosec_blocklist_cgi
	cgi2 "net/http/cgi"
)

func maincgi2() {
	if err := cgi2.Serve(nil); err != nil {
		return
	}
}
