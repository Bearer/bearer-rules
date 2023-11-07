package main

import "net/http/cgi"

func maincgi() {
	if err := cgi.Serve(nil); err != nil {
		return
	}
}
