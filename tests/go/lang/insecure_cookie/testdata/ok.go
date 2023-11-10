package util

import (
	"net/http"
	"time"
)

func SetCookie(w http.ResponseWriter, name, value string) {
	cookie := http.Cookie{
		Name:     name,
		Value:    value,
		HttpOnly: true,
		Secure:   true,
	}
	http.SetCookie(w, &cookie)
}

func SetCookie2(w http.ResponseWriter, name, value string) {
	httpOnly := true
	cookie := http.Cookie{
		Name:     name,
		Value:    value,
		HttpOnly: httpOnly,
		Secure:   true,
	}
	http.SetCookie(w, &cookie)
}

func DeleteCookie(w http.ResponseWriter, cookies []string) {
	for _, name := range cookies {
		cookie := &http.Cookie{
			Name:     name,
			Value:    "",
			Expires:  time.Unix(0, 0),
			HttpOnly: true,
			Secure:   true,
		}
		http.SetCookie(w, cookie)
	}
}

func DeleteCookie2(w http.ResponseWriter, cookies []string) {
	httpOnly := true

	for _, name := range cookies {
		cookie := &http.Cookie{
			Name:     name,
			Value:    "",
			Expires:  time.Unix(0, 0),
			HttpOnly: httpOnly,
			Secure:   true,
		}
		http.SetCookie(w, cookie)
	}
}
