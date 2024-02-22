package go_lang_logger_leak

import (
	seelog "github.com/cihub/seelog"
	glog "github.com/golang/glog"
	zerolog "github.com/rs/zerolog"
	logrus "github.com/sirupsen/logrus"
	"go.uber.org/zap"
)

func bad(Data any) {
	// bearer:expected go_lang_logger_leak
	zerolog.Error().Msg(Data)
	// bearer:expected go_lang_logger_leak
	zerolog.Error().Msgf("Some data: %#v", Data)
}

func bad2(Data any) {
	// bearer:expected go_lang_logger_leak
	zerolog.Info().Msg(Data)
	// bearer:expected go_lang_logger_leak
	zerolog.Printf("Some data: %#v", Data)
}

func bad3(Data any) {
	// bearer:expected go_lang_logger_leak
	logrus.WithFields().Info(Data)

	log := logrus.New()
	// bearer:expected go_lang_logger_leak
	log.Error("Some data: %#v", Data)
}

func bad4(Data any) {
	var cfg zap.Config
	logger := zap.Must(cfg.Build())
	defer logger.Sync()

	// bearer:expected go_lang_logger_leak
	logger.Info(Data)
	logger.Printf("Args: %s", Data)
}

func bad5(Data any) {

	// bearer:expected go_lang_logger_leak
	seelog.Trace(Data)
}

func bad6(Data any) {
	// bearer:expected go_lang_logger_leak
	glog.Fatalf("Some data: %#v", Data)
}

type User struct {
	Name   string
	Uuid   string
	Gender string
}

func ok() {
	user := User{
		Uuid:   "123",
		Name:   "foo",
		Gender: "",
	}
	name := user.Name

	zerolog.Error().Msg("Some string message")
	// caught by another rule
	zerolog.Error().Msg(name)
}
