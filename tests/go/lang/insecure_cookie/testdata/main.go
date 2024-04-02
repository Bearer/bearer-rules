// Use bearer:expected go_lang_insecure_cookie to flag expected findings
package util

import (
	"net/http"
	"time"
)

func SetCookie(w http.ResponseWriter, name, value string) {
	// bearer:expected go_lang_insecure_cookie
	cookie := http.Cookie{
		Name:  name,
		Value: value,
	}
	http.SetCookie(w, &cookie)
}

func SetCookie2(w http.ResponseWriter, name, value string) {
	// bearer:expected go_lang_insecure_cookie
	cookie := http.Cookie{
		Name:     name,
		Value:    value,
		HttpOnly: true,
		Secure:   false,
	}
	http.SetCookie(w, &cookie)
}

func SetCookie3(w http.ResponseWriter, name, value string) {
	// bearer:expected go_lang_insecure_cookie
	cookie := http.Cookie{
		Name:     name,
		Value:    value,
		HttpOnly: true,
		Secure:   false,
	}
	http.SetCookie(w, &cookie)
}

func SetCookie4(w http.ResponseWriter, name, value string) {
	secure := false
	// bearer:expected go_lang_insecure_cookie
	cookie := http.Cookie{
		Name:     name,
		Value:    value,
		HttpOnly: true,
		Secure:   secure,
	}
	http.SetCookie(w, &cookie)
}

func DeleteCookie(w http.ResponseWriter, cookies []string) {
	for _, name := range cookies {
		// bearer:expected go_lang_insecure_cookie
		cookie := &http.Cookie{
			Name:    name,
			Value:   "",
			Expires: time.Unix(0, 0),
		}
		http.SetCookie(w, cookie)
	}
}

func Ok(w http.ResponseWriter, name, value string) {
	cookie := http.Cookie{
		Name:     name,
		Value:    value,
		Secure:   true,
	}
	http.SetCookie(w, &cookie)
}
