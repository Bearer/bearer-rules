package main

import (
	"github.com/honeybadger-io/honeybadger-go"
)

func main() {
	// bearer:expected go_third_parties_honeybadger
	honeybadger.Notify(err, honeybadger.Context{"user_id": user.email})
	honeybadger.Notify(err, honeybadger.Context{"user_id": user.id})

	// bearer:expected go_third_parties_honeybadger
	honeybadger.Notify(err, honeybadger.Fingerprint{user.email})
	honeybadger.Notify(err, honeybadger.Fingerprint{user.id})

	// bearer:expected go_third_parties_honeybadger
	honeybadger.SetContext(honeybadger.Context{"user_id": user.email})
	honeybadger.SetContext(honeybadger.Context{"user_id": user.id})

	context := honeybadger.Context{}
	// bearer:expected go_third_parties_honeybadger
	context["user"] = user.email
	context["user"] = user.id

	honeybadger.BeforeNotify(func(notice *honeybadger.Notice) error {
		// bearer:expected go_third_parties_honeybadger
		notice.Context["user"] = user.email
		notice.Context["user"] = user.id

		return nil
	})
}
