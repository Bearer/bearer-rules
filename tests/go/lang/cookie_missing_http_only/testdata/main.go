// Use bearer:expected go_lang_cookie_missing_http_only to flag expected findings

package util

import (
	"net/http"
	"time"
)

func SetCookie(w http.ResponseWriter, name, value string) {
	// bearer:expected go_lang_cookie_missing_http_only
	cookie := http.Cookie{
		Name:  name,
		Value: value,
	}
	http.SetCookie(w, &cookie)
}

func SetCookie2(w http.ResponseWriter, name, value string) {
	// bearer:expected go_lang_cookie_missing_http_only
	cookie := http.Cookie{
		Name:     name,
		Value:    value,
		HttpOnly: false,
		Secure:   true,
	}
	http.SetCookie(w, &cookie)
}

func SetCookie3(w http.ResponseWriter, name, value string) {
	httpOnly := false
	// bearer:expected go_lang_cookie_missing_http_only
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
		// bearer:expected go_lang_cookie_missing_http_only
		cookie := &http.Cookie{
			Name:    name,
			Value:   "",
			Expires: time.Unix(0, 0),
		}
		http.SetCookie(w, cookie)
	}
}
