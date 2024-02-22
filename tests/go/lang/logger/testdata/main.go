package go_lang_logger

import (
	seelog "github.com/cihub/seelog"
	glog "github.com/golang/glog"
	"github.com/rs/zerolog"
	zerolog "github.com/rs/zerolog"
	"github.com/rs/zerolog/log"
	logrus "github.com/sirupsen/logrus"
	"go.uber.org/zap"
)

type User struct {
	Name   string
	Uuid   string
	Gender string
}

func (x User) FullName() (string, error) {
	return "[" + x.Gender + "] " + x.Name, nil
}

func bad() {
	user := User{
		Uuid:   "123",
		Name:   "foo",
		Gender: "",
	}

	name := user.Name
	other, _ := user.FullName()

	// bearer:expected go_lang_logger
	zerolog.Error().Msg(name)
	// bearer:expected go_lang_logger
	zerolog.Error().Msg(other)
}

func bad2() {
	user := User{
		Uuid:   "123",
		Name:   "foo",
		Gender: "",
	}

	name := user.Name
	other, _ := user.FullName()

	// bearer:expected go_lang_logger
	zerolog.Info().Msg(name)
	// bearer:expected go_lang_logger
	zerolog.Print(other)
}

func bad3() {
	user := User{
		Uuid:   "123",
		Name:   "foo",
		Gender: "",
	}

	other, _ := user.FullName()

	// bearer:expected go_lang_logger
	logrus.WithFields().Info(user.Name)

	log := logrus.New()
	// bearer:expected go_lang_logger
	log.Error(other)
}

func bad4() {
	user := User{
		Uuid:   "123",
		Name:   "foo",
		Gender: "",
	}

	name := user.Name
	other, _ := user.FullName()

	var cfg zap.Config
	logger := zap.Must(cfg.Build())
	defer logger.Sync()

	// bearer:expected go_lang_logger
	logger.Info(name)
	logger.Printf("Args: %s", other)
}

func bad5() {
	user := User{
		Uuid:   "123",
		Name:   "foo",
		Gender: "",
	}

	name := user.Name

	// bearer:expected go_lang_logger
	seelog.Trace(name)
}

func bad6() {
	user := User{
		Uuid:   "123",
		Name:   "foo",
		Gender: "",
	}

	other, _ := user.FullName()

	// bearer:expected go_lang_logger
	glog.Fatalf(other)
}

func ok() {
	user := User{
		Uuid:   "123",
		Name:   "foo",
		Gender: "",
	}

	uuid := user.Uuid

	zerolog.Error().Msg(uuid)
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
	log.Error().Msg(name) // expect detection
	// bearer:expected go_lang_logger
	log.Error().Msg(other) // expect detection
	// bearer:expected go_lang_logger
	log.Error().Msg(user) // expect detection
}
