package main

// bearer:expected go_gosec_blocklist_cgi
import "net/http/cgi"

func maincgi() {
	if err := cgi.Serve(nil); err != nil {
		return
	}
}
