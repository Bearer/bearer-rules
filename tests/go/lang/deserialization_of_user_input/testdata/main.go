// Use bearer:expected go_lang_deserialization_of_user_input to flag expected findings

import (
	"encoding/gob"
	"gopkg.in/yaml.v3"
	"github.com/golang/protobuf/proto"
	"bytes"
	"fmt"
)

func bad() {
	decoder := gob.NewDecoder(os.Args[0])
	// bearer:expected go_lang_deserialization_of_user_input
	decoder.Decode(os.Args[0])
	// ...
}

func bad2() {
	// bearer:expected go_lang_deserialization_of_user_input
	yaml.Unmarshal(os.Args[0])
	// bearer:expected go_lang_deserialization_of_user_input
	yaml.Marshal(os.Args[0])
	// ...
}

func bad3() {
	// bearer:expected go_lang_deserialization_of_user_input
	json.Unmarshal(os.Args[0])
	// bearer:expected go_lang_deserialization_of_user_input
	json.Marshal(os.Args[0])
	// ...
}

func bad4() {
	newMessage := &example.Message{}
	// bearer:expected go_lang_deserialization_of_user_input
	proto.Unmarshal(os.Args[0], newMessage)
	// bearer:expected go_lang_deserialization_of_user_input
	proto.Marshal(os.Args[0])
	// ...
}