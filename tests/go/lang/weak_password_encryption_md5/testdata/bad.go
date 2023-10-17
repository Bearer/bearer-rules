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
	fmt.Printf("%x", h.Sum(user.Password))

	data := []byte(user.Password)
	fmt.Printf("%x", md5.Sum(data))
}

