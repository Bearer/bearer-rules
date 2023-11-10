package util

import (
	"net/http"
	"time"
)

func SetCookie(w http.ResponseWriter, name, value string) {
	cookie := http.Cookie{
		Name:  name,
		Value: value,
	}
	http.SetCookie(w, &cookie)
}

func SetCookie2(w http.ResponseWriter, name, value string) {
	cookie := http.Cookie{
		Name:     name,
		Value:    value,
		HttpOnly: false,
		Secure:   true,
	}
	http.SetCookie(w, &cookie)
}

func SetCookie2_bis(w http.ResponseWriter, name, value string) {
	cookie := http.Cookie{
		Name:     name,
		Value:    value,
		HttpOnly: true,
		Secure:   false,
	}
	http.SetCookie(w, &cookie)
}

func SetCookie3(w http.ResponseWriter, name, value string) {
	httpOnly := false
	cookie := http.Cookie{
		Name:     name,
		Value:    value,
		HttpOnly: httpOnly,
		Secure:   true,
	}
	http.SetCookie(w, &cookie)
}

func SetCookie4(w http.ResponseWriter, name, value string) {
	cookie := http.Cookie{
		Name:     name,
		Value:    value,
		HttpOnly: true,
		Secure:   false,
	}
	http.SetCookie(w, &cookie)
}

func SetCookie5(w http.ResponseWriter, name, value string) {
	cookie := http.Cookie{
		Name:     name,
		Value:    value,
		HttpOnly: true,
		Secure:   false,
	}
	http.SetCookie(w, &cookie)
}

func DeleteCookie(w http.ResponseWriter, cookies []string) {
	for _, name := range cookies {
		cookie := &http.Cookie{
			Name:    name,
			Value:   "",
			Expires: time.Unix(0, 0),
		}
		http.SetCookie(w, cookie)
	}
}
