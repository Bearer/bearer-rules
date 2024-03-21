package main

import "github.com/rollbar/rollbar-go"

func main() {
	// bearer:expected go_third_parties_rollbar
	rollbar.Info(user.email)
	rollbar.Info(user.id)

	client := rollbar.New(token, environment, codeVersion, serverHost, serverRoot)

	// bearer:expected go_third_parties_rollbar
	client.SetPerson(user.id, "", user.email)
	client.SetPerson(user.id, "", user.id)
}
