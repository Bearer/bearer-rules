import (
	"crypto/md5"
	"fmt"
)

type User struct {
	DateOfBirth string
}

func main() {
	h := md5.New()
	user := User{
		DateOfBirth: "01/01/1970"
	}

	fmt.Printf("%x", h.Sum(user.DateOfBirth))

	data := []byte(user.DateOfBirth)
	fmt.Printf("%x", md5.Sum(data))
}
