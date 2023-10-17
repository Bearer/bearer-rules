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
	fmt.Printf("%x", h.Sum(user.DateOfBirth))

	data := []byte(user.DateOfBirth)
	fmt.Printf("%x", sha1.Sum(data))
}
