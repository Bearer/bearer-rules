package main

import (
	cgi2 "net/http/cgi"
)

func maincgi2() {
	if err := cgi2.Serve(nil); err != nil {
		return
	}
}
