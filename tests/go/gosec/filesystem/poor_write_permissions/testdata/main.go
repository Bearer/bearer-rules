// License: Apache 2.0 (c) gosec
// source: https://github.com/securego/gosec/blob/master/testutils/source.go
// hash: bfb0f42

package main

import (
	"bufio"
	"fmt"
	"io/ioutil"
	"os"
)

func check(e error) {
	if e != nil {
		panic(e)
	}
}

func mainwriteperms() {

	d1 := []byte("hello\ngo\n")
	err := ioutil.WriteFile("/tmp/dat1", d1, 0744)
	check(err)

	allowed := ioutil.WriteFile("/tmp/dat1", d1, 0600)
	check(allowed)

	f, err := os.Create("/tmp/dat2")
	check(err)

	defer f.Close()

	d2 := []byte{115, 111, 109, 101, 10}
	n2, err := f.Write(d2)

	defer check(err)
	fmt.Printf("wrote %d bytes\n", n2)

	n3, err := f.WriteString("writes\n")
	fmt.Printf("wrote %d bytes\n", n3)

	f.Sync()

	w := bufio.NewWriter(f)
	n4, err := w.WriteString("buffered\n")
	fmt.Printf("wrote %d bytes\n", n4)

	w.Flush()

}
