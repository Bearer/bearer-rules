import (
	"crypto/sha1"
	"fmt"
)

type User struct {
	DateOfBirth string
}

func main() {
	h := sha1.New()
	user := User{
		DateOfBirth: "01/01/1970"
	}
// bearer:expected go_lang_weak_hash_sha1
	fmt.Printf("%x", h.Sum(user.DateOfBirth))

	data := []byte(user.DateOfBirth)
// bearer:expected go_lang_weak_hash_sha1
	fmt.Printf("%x", sha1.Sum(data))
}
