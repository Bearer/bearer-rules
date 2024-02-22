import (
	"crypto/md5"
	"fmt"
)

type User struct {
	Gender      string
	DateOfBirth string
	Password    string
}

func Authenticate(password string) {
	h := md5.New()
// bearer:expected go_lang_weak_password_encryption_md5
	fmt.Printf("%x", h.Sum(user.Password))

	data := []byte(user.Password)
// bearer:expected go_lang_weak_password_encryption_md5
	fmt.Printf("%x", md5.Sum(data))
}

