package main

import (
	"fmt"
	"net/rpc"
	"reflect"
)

type Args struct {
	Input string
}

func bad(maliciousInput string) {
	client, err := rpc.Dial("tcp", "localhost:1234")
	if err != nil {
		fmt.Println("Failed to connect to RPC server:", err)
		return
	}

	var reply string
	// bearer:expected go_gosec_subproc_subproc
	err = client.Call("MyService.DoSomething", Args{Input: maliciousInput}, &reply)
	if err != nil {
		fmt.Println("RPC call failed:", err)
		return
	}

	fmt.Println("Server response:", reply)
}

type User struct {
	Username string
	Role     string
}

func bad2(maliciousInput string) {
	user := User{Username: "admin", Role: "user"}

	// bearer:expected go_gosec_subproc_subproc
	_ = reflect.ValueOf(user).FieldByName(maliciousInput)

	// ...
}

func good(maliciousInput string) {
	client, err := rpc.Dial("tcp", "localhost:1234")
	if err != nil {
		fmt.Println("Failed to connect to RPC server:", err)
		return
	}

	var reply string
	if maliciousInput == "delete" {
		err = client.Call("MyService.DoSomething", Args{Input: "delete"}, &reply)
	}
	if err != nil {
		fmt.Println("RPC call failed:", err)
		return
	}

	fmt.Println("Server response:", reply)
}
