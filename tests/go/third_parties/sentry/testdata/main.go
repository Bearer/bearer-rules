package main

import "github.com/getsentry/sentry-go"

func main() {
	// bearer:expected go_third_parties_sentry
	sentry.CaptureMessage(user.email)
	sentry.CaptureMessage(user.id)

	client := sentry.NewClient(sentry.ClientOptions{})

	// bearer:expected go_third_parties_sentry
	client.CaptureMessage(user.email, hint, scope)
	client.CaptureMessage(user.id, hint, scope)

	options := sentry.ClientOptions{}
	// bearer:expected go_third_parties_sentry
	options.Tags["user"] = user.email
	options.Tags["user"] = user.id

	// bearer:expected go_third_parties_sentry
	options2 := sentry.ClientOptions{Tags: map[string]string{"user": user.email}}
	options2 = sentry.ClientOptions{Tags: map[string]string{"user": user.id}}

	span := sentry.SpanFromContext(ctx)
	// bearer:expected go_third_parties_sentry
	span.SetTag("user", user.email)
	span.SetTag("user", user.id)

	childSpan := span.StartChild("test")
	// bearer:expected go_third_parties_sentry
	childSpan.SetData("user", user.email)
	childSpan.SetData("user", user.id)

	hub := sentry.CurrentHub()
	// bearer:expected go_third_parties_sentry
	hub.CaptureMessage(user.email)
	hub.CaptureMessage(user.id)

	scope := sentry.NewScope()
	// bearer:expected go_third_parties_sentry
	scope.SetTag("user", user.email)
	scope.SetTag("user", user.id)
}
