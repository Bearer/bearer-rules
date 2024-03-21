package main

import "gopkg.in/segmentio/analytics-go.v3"

func main() {
	client := analytics.New(key)

	// bearer:expected go_third_parties_segment
	client.Enqueue(analytics.Identify{UserId: user.email})
	client.Enqueue(analytics.Identify{UserId: user.id})

	identify := analytics.Identify{}
	// bearer:expected go_third_parties_segment
	identify.UserId = user.email
	identify.UserId = user.id

	// bearer:expected go_third_parties_segment
	traits := analytics.NewTraits().
		Set("other", 42).
		Set("user", user.email)
	traits = analytics.NewTraits().
		Set("other", 42).
		Set("user", user.id)
}
