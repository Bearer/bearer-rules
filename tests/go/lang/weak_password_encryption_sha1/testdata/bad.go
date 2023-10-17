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
	fmt.Printf("%x", h.Sum(user.Password))

	data := []byte(user.Password)
	fmt.Printf("%x", sha1.Sum(data))
}

