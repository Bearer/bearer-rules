package testdata

import (
	"github.com/airbrake/gobrake/v5"

	foobrake "github.com/airbrake/gobrake/v5"
)

func main() {
	notifier := gobrake.NewNotifier(12345, "abcdefg")

	notice := notifier.Notice(err, req, 1)
	// bearer:expected go_third_parties_airbrake
	notice.Params["user"] = user.name
	notice.Params["user"] = user.id
	// bearer:expected go_third_parties_airbrake
	notice.Context["user"] = user.name
	notice.Context["user"] = user.id

	notifier.AddFilter(func(notice2 *gobrake.Notice) {
		// bearer:expected go_third_parties_airbrake
		notice2.Env["user"] = user.name
		notice2.Env["user"] = user.id
	})

	notice3 := foobrake.NewNotice(err, req, 1)
	// bearer:expected go_third_parties_airbrake
	notice3.Params["user"] = user.name
	notice3.Params["user"] = user.id

	// bearer:expected go_third_parties_airbrake
	notice3.Env = map[string]string{"user": user.name}
	notice3.Env = map[string]string{"user": user.id}
}
