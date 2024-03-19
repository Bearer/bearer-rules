package main

import "github.com/newrelic/go-agent/v3/newrelic"

func main() {
	app, err := newrelic.NewApplication(
			newrelic.ConfigAppName("Your Application Name"),
			newrelic.ConfigLicense("YOUR_NEW_RELIC_LICENSE_KEY")
	)

	// bearer:expected go_third_parties_new_relic
	transaction := app.StartTransaction(user.email, newrelic.WithIgnoredPrefix("foo"))
	app.StartTransaction(user.id, newrelic.WithIgnoredPrefix("foo"))

	// bearer:expected go_third_parties_new_relic
	transaction.SetUserID(user.email)
	transaction.SetUserID(user.id)

	// bearer:expected go_third_parties_new_relic
	app.RecordCustomEvent("foo", map[string]interface{}{"user": user.email})
	app.RecordCustomEvent("foo", map[string]interface{}{"user": user.id})

	// bearer:expected go_third_parties_new_relic
	app.RecordLog(newrelic.LogData{Message: user.email})
	app.RecordLog(newrelic.LogData{Message: user.id})

	log := newrelic.LogData{}
	// bearer:expected go_third_parties_new_relic
	log.Message = user.email
	log.Message = user.id
}
