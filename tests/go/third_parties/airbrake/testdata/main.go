package testdata

import (
	"github.com/airbrake/gobrake/v5"

	foobrake "github.com/airbrake/gobrake/v5"
)

func main() {
	notifier := gobrake.NewNotifier(12345, "abcdefg")

	notice := notifier.Notice(err, req, 1)
	// bearer:expected go_third_parties_airbrake
	notice.Params["username"] = user.name
	notice.Params["ok"] = foo
	// bearer:expected go_third_parties_airbrake
	notice.Context["username"] = user.name
	notice.Context["ok"] = foo

	notifier.AddFilter(func(notice2 *gobrake.Notice) {
		// bearer:expected go_third_parties_airbrake
		notice2.Env["username"] = user.name
		notice2.Env["ok"] = foo
	})

	notice3 := foobrake.NewNotice(err, req, 1)
	// bearer:expected go_third_parties_airbrake
	notice3.Params["username"] = user.name
	notice3.Params["ok"] = foo

	// bearer:expected go_third_parties_airbrake
	notice3.Env = map[string]string{"username": user.name}
	notice3.Env = map[string]string{"ok": foo}
}
