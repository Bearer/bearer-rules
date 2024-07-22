// Use bearer:expected go_lang_deserialization_of_user_input to flag expected findings

import (
	"encoding/gob"
	"gopkg.in/yaml.v3"
	"github.com/golang/protobuf/proto"
	"bytes"
	"fmt"
)

type Employee struct {
	Name string
	Role string
}

func bad() {

	dec := gob.NewDecoder(bytes.NewReader([]byte(os.Args[0])))
	var v Vector
	// bearer:expected go_lang_deserialization_of_user_input
	err = dec.Decode(&v)
}

func ok() {
	data = &Employee{}
	json.Unmarshal(os.Args[0], data)
	json.Marshal(data)
}