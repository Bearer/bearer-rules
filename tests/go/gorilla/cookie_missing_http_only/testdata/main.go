// Use bearer:expected go_gorilla_cookie_missing_http_only to flag expected findings

package session

import (
	"net/http"

	"github.com/gorilla/sessions"
	"github.com/govwa/util/config"
)

var store = sessions.NewCookieStore([]byte(config.Cfg.Sessionkey))

func SetSession(w http.ResponseWriter, r *http.Request, data map[string]string) {
	session, _ := store.Get(r, "session")
	// bearer:expected go_gorilla_cookie_missing_http_only
	session.Options = &sessions.Options{
		Path:     "/",
		MaxAge:   3600,
		HttpOnly: false,
		Secure:   true,
	}
}

func DeleteSession(w http.ResponseWriter, r *http.Request) {
	session, _ := store.Get(r, "session")
	// bearer:expected go_gorilla_cookie_missing_http_only
	session.Options = &sessions.Options{
		MaxAge:   -1,
		HttpOnly: false,
		Secure:   true,
	}

	return
}
