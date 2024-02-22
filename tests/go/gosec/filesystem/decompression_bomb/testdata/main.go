package main

import (
	"archive/zip"
	"bytes"
	"compress/zlib"
	"io"
	"os"
	"strconv"
)

func foo1() {
	buff := []byte{120, 156, 202, 72, 205, 201, 201, 215, 81, 40, 207,
		47, 202, 73, 225, 2, 4, 0, 0, 255, 255, 33, 231, 4, 147}
	b := bytes.NewReader(buff)
	r, err := zlib.NewReader(b)
	if err != nil {
		panic(err)
	}
// bearer:expected go_gosec_filesystem_decompression_bomb
	_, err = io.Copy(os.Stdout, r)
	if err != nil {
		panic(err)
	}
	r.Close()
}

func foo2() {
	buff := []byte{120, 156, 202, 72, 205, 201, 201, 215, 81, 40, 207,
		47, 202, 73, 225, 2, 4, 0, 0, 255, 255, 33, 231, 4, 147}
	b := bytes.NewReader(buff)
	r, err := zlib.NewReader(b)
	if err != nil {
		panic(err)
	}
	buf := make([]byte, 8)
// bearer:expected go_gosec_filesystem_decompression_bomb
	_, err = io.CopyBuffer(os.Stdout, r, buf)
	if err != nil {
		panic(err)
	}
	r.Close()
}

func foo3() {
	r, err := zip.OpenReader("tmp.zip")
	if err != nil {
		panic(err)
	}
	defer r.Close()
	for i, f := range r.File {
		out, err := os.OpenFile("output"+strconv.Itoa(i), os.O_WRONLY|os.O_CREATE|os.O_TRUNC, f.Mode())
		if err != nil {
			panic(err)
		}
		rc, err := f.Open()
		if err != nil {
			panic(err)
		}
// bearer:expected go_gosec_filesystem_decompression_bomb
		_, err = io.Copy(out, rc)
		out.Close()
		rc.Close()
		if err != nil {
			panic(err)
		}
	}
}

func foo4() {
	s, err := os.Open("src")
	if err != nil {
		panic(err)
	}
	defer s.Close()
	d, err := os.Create("dst")
	if err != nil {
		panic(err)
	}
	defer d.Close()
	_, err = io.Copy(d, s)
	if err != nil {
		panic(err)
	}
}
