// Use bearer:expected go_gorilla_cookie_missing_secure to flag expected findings

package session

import (
	"net/http"

	"github.com/gorilla/sessions"
	"github.com/govwa/util/config"
)

var store = sessions.NewCookieStore([]byte(config.Cfg.Sessionkey))

func SetSession(w http.ResponseWriter, r *http.Request, data map[string]string) {
	session, _ := store.Get(r, "session")
	// bearer:expected go_gorilla_insecure_cookie
	session.Options = &sessions.Options{
		Path:     "/",
		MaxAge:   3600,
		HttpOnly: true,
		Secure:   false,
	}
}
