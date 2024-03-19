package main

import "github.com/bugsnag/bugsnag-go/v2"

func main() {
	// bearer:expected go_third_parties_bugsnag
	bugsnag.Notify(err, map[string]string{"user": user.email})
	bugsnag.Notify(err, map[string]string{"user": user.id})

	// bearer:expected go_third_parties_bugsnag
	defer bugsnag.Recover(ctx, map[string]string{"user": user.email})
	defer bugsnag.Recover(ctx, map[string]string{"user": user.id})

	// bearer:expected go_third_parties_bugsnag
	defer bugsnag.AutoNotify(ctx, map[string]string{"user": user.email})
	defer bugsnag.AutoNotify(ctx, map[string]string{"user": user.id})

	// bearer:expected go_third_parties_bugsnag
	h := bugsnag.HandlerFunc(handler, map[string]string{"user": user.email})
	h = bugsnag.HandlerFunc(handler, map[string]string{"user": user.id})

	bugsnag.OnBeforeNotify(func(event *bugsnag.Event, config *bugsnag.Configuration) error {
		// bearer:expected go_third_parties_bugsnag
		event.MetaData.AddStruct("User", user.email)
		event.MetaData.AddStruct("User", user.id)

		// bearer:expected go_third_parties_bugsnag
		event.Message = user.email
		event.Message = user.id

		return nil
	})

	// bearer:expected go_third_parties_bugsnag
	user := bugsnag.User{Email: user.email}
	user = bugsnag.User{Email: user.id}

	notifier := bugsnag.New()

	// bearer:expected go_third_parties_bugsnag
	defer notifier.Recover(map[string]string{"user": user.email})
	defer notifier.Recover(map[string]string{"user": user.id})

	// bearer:expected go_third_parties_bugsnag
	defer notifier.AutoNotify(map[string]string{"user": user.email})
	defer notifier.AutoNotify(map[string]string{"user": user.id})

	// bearer:expected go_third_parties_bugsnag
	notifier.Notify(err, map[string]string{"user": user.email})
	notifier.Notify(err, map[string]string{"user": user.id})

	// bearer:expected go_third_parties_bugsnag
	notifier.NotifySync(err, true, map[string]string{"user": user.email})
	notifier.NotifySync(err, true, map[string]string{"user": user.id})
}
