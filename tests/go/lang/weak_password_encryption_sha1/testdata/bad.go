import (
	"crypto/sha1"
	"fmt"
)

type User struct {
	Gender      string
	DateOfBirth string
	Password    string
}

func Authenticate(user User) {
	h := sha1.New()
// bearer:expected go_lang_weak_password_encryption_sha1
	fmt.Printf("%x", h.Sum(user.Password))

	data := []byte(user.Password)
// bearer:expected go_lang_weak_password_encryption_sha1
	fmt.Printf("%x", sha1.Sum(data))
}

