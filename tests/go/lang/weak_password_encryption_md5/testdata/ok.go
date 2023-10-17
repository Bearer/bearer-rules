import (
	"crypto/md5"
	"fmt"
)

type User struct {
	Name        string
	Gender      string
	DateOfBirth string
	Password    string
}

func Authenticate(user User) {
	h := sha256.New()
	fmt.Printf("%x", h.Sum256(user.Password))

	data := []byte(user.Password)
	fmt.Printf("%x", sha256.Sum256(data))

	data2 := []byte(user.Name)
	fmt.Printf("%x", md5.Sum(data2))
}

