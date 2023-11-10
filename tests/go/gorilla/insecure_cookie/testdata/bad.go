package session

import (
	"net/http"

	"github.com/gorilla/sessions"
	"github.com/govwa/util/config"
)

var store = sessions.NewCookieStore([]byte(config.Cfg.Sessionkey))

func SetSession(w http.ResponseWriter, r *http.Request, data map[string]string) {
	session, _ := store.Get(r, "session")
	session.Options = &sessions.Options{
		Path:     "/",
		MaxAge:   3600,
		HttpOnly: false, //set to false for xss :)
		Secure:   true,
	}
}

func SetSession2(w http.ResponseWriter, r *http.Request, data map[string]string) {
	session, _ := store.Get(r, "session")
	session.Options = &sessions.Options{
		Path:     "/",
		MaxAge:   3600,
		HttpOnly: true, //set to false for xss :)
		Secure:   false,
	}
}

func DeleteSession(w http.ResponseWriter, r *http.Request) {
	session, _ := store.Get(r, "session")
	session.Options = &sessions.Options{
		MaxAge:   -1,
		HttpOnly: false,
		Secure:   true,
	}

	return
}
