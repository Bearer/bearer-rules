import (
	"crypto/sha256"
	"fmt"
)

type User struct {
	DateOfBirth string
}

func main() {
	h := sha256.New()
	user := User{
		DateOfBirth: "01/01/1970"
	}
	fmt.Printf("%x", h.Sum256("string"))

	data := []byte("string")
	fmt.Printf("%x", sha256.Sum256(data))
}
