package main3

import "github.com/rs/zerolog/log"

// var a, b string

type User struct {
	Name   string
	Uuid   string
	Gender string
}

func (x User) FullName() (string, error) {
	return "[" + x.Gender + "] " + x.Name, nil
}

func main() {
	user := User{
		Uuid:   "123",
		Name:   "foo",
		Gender: nil,
	}

	name := user.Name
	other, _ := user.FullName()

// bearer:expected go_lang_logger
	log.Error().Msg(name)  // expect detection
// bearer:expected go_lang_logger
	log.Error().Msg(other) // expect detection
// bearer:expected go_lang_logger
	log.Error().Msg(user)  // expect detection
}
