import (
	"net/http"
)

func fetchUser(w http.ResponseWriter, r *http.Request) {
	_, err := getUserFromDB(r.FormValue("username"))
	if err != nil {
		// Exposing detailed error to the client
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
	// ...
}