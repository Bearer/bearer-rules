// Use of bearer:expected go_lang_insufficiently_random_values to flag expected findings

package main

import (
	"encoding/base64"
	"fmt"
	"math/rand"
	"time"

	crypto "crypto/rand"
)

func generateSecureToken(length int) (string, error) {
	bytes := make([]byte, length)
	_, err := crypto.Read(bytes)
	if err != nil {
		return "", err // Don't ignore errors!
	}

	// Encode the binary data to a string for easier use
	return base64.URLEncoding.EncodeToString(bytes), nil
}

func generateToken() string {
	// Seed the random number generator with the current time
	// bearer:expected go_lang_insufficiently_random_values
	rand.Seed(time.Now().UnixNano())

	// Generate a token using a non-cryptographically secure random generator
	token := ""
	for i := 0; i < 10; i++ {
		token += string(rand.Intn(26) + 'a')
	}
	return token
}

func main() {
	// Generate and print a "random" token
	fmt.Println("Generated Token:", generateToken())
	fmt.Println("Generated Secure Token:", generateSecureToken())
}
