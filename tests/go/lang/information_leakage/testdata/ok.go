import (
	"net/http"
)

func fetchUser(w http.ResponseWriter, r *http.Request) {
	_, err := getUserFromDB(r.FormValue("username"))
	if err != nil {
		// Log the error internally and show a generic error message
		log.Println("fetchUser error:", err)
		http.Error(w, "Internal Server Error", http.StatusInternalServerError)
	}
	// ...
}