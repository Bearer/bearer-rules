// Use bearer:expected go_lang_log_output_neutralization to flag expected findings

package main

import (
	"bytes"
	"os"

	"log"

	seelog "github.com/cihub/seelog"
	glog "github.com/golang/glog"
	zerolog "github.com/rs/zerolog"
	logrus "github.com/sirupsen/logrus"
	"go.uber.org/zap"

	"strconv"
)

func bad() {
	var buf bytes.Buffer
	logger := log.New(&buf, "logger: ", log.Lshortfile)

	// bearer:expected go_lang_log_output_neutralization
	logger.Print(os.Args[0])
}

func bad2() {
	// bearer:expected go_lang_log_output_neutralization
	zerolog.Info().Msg(os.Args[0])
	// bearer:expected go_lang_log_output_neutralization
	zerolog.Print(os.Args[0])
}

func bad3() {
	// bearer:expected go_lang_log_output_neutralization
	logrus.WithFields().Info(os.Args[0])

	log := logrus.New()
	// bearer:expected go_lang_log_output_neutralization
	log.Error(os.Args[0])
}

func bad4() {
	var cfg zap.Config
	logger := zap.Must(cfg.Build())
	defer logger.Sync()

	// bearer:expected go_lang_log_output_neutralization
	logger.Info(os.Args[0])
	logger.Printf("Args: %s", os.Args[0])
}

func bad5() {
	// bearer:expected go_lang_log_output_neutralization
	seelog.Trace(os.Args[0])
}

func bad6() {
	// bearer:expected go_lang_log_output_neutralization
	glog.Fatalf(os.Args[0])
}

func ok(input string) {
	var buf bytes.Buffer
	logger := log.New(&buf, "logger: ", log.Lshortfile)
	sanitizedInput := strconv.Quote(input)

	logger.Print(sanitizedInput)
	logger.Printf("Args: %q", os.Args[0])

	zerolog.Info.Msg(sanitizedInput)
}
