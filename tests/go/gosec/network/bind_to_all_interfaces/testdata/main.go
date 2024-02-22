package main

import (
	"log"
	"net"
)

func main() {
// bearer:expected go_gosec_network_bind_to_all_interfaces
	l, err := net.Listen("tcp", "0.0.0.0:2000")
	if err != nil {
		log.Fatal(err)
	}
	defer l.Close()
}
