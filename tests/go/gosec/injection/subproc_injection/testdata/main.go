package main

import (
	"context"
	"fmt"
	"log"
	"os"
	"os/exec"
	"syscall"
)

func foo1() {
	// ok
	err := exec.CommandContext(context.Background(), "git", "rev-parse", "--show-toplavel").Run()
	if err != nil {
		log.Fatal(err)
	}
	log.Printf("Command finished with error: %v", err)
}

func foo2() {
	// ruleid
// bearer:expected go_gosec_injection_subproc_injection
	err := exec.CommandContext(context.Background(), os.Args[0], "5").Run() // detected
	if err != nil {
		log.Fatal(err)
	}
	log.Printf("Command finished with error: %v", err)
}

func foo3() {
	run := "sleep" + os.Getenv("SOMETHING")
	// ruleid
// bearer:expected go_gosec_injection_subproc_injection
	cmd := exec.Command(run, "5") // detected
	err := cmd.Start()
	if err != nil {
		log.Fatal(err)
	}
	log.Printf("Waiting for command to finish...")
	err = cmd.Wait()
	log.Printf("Command finished with error: %v", err)
}

func foo4(command string) {
	// ruleid
// bearer:expected go_gosec_injection_subproc_injection
	cmd := exec.Command(command, "5")
	err := cmd.Start()
	if err != nil {
		log.Fatal(err)
	}
	log.Printf("Waiting for command to finish...")
	err = cmd.Wait()
}

func foo5() {
	foo4("sleep")
}

func foo6(a string, c string) {
	// ruleid
// bearer:expected go_gosec_injection_subproc_injection
	cmd := exec.Command(c)
	err := cmd.Start()
	if err != nil {
		log.Fatal(err)
	}
	log.Printf("Waiting for command to finish...")
	err = cmd.Wait()
	// ruleid
// bearer:expected go_gosec_injection_subproc_injection
	cmd = exec.Command(a)
	err = cmd.Start()
	if err != nil {
		log.Fatal(err)
	}
	log.Printf("Waiting for command to finish...")
	err = cmd.Wait()
}

func foo7() {
	foo6("ll", "ls")
}

func foo8() {
	err := syscall.Exec("/bin/cat", []string{"/etc/passwd"}, nil)
	if err != nil {
		fmt.Printf("Error: %v\n", err)
	}
}

func foo9(command string) {
	// ruleid
// bearer:expected go_gosec_injection_subproc_injection
	_, err := syscall.ForkExec(command, []string{}, nil)
	if err != nil {
		fmt.Printf("Error: %v\n", err)
	}
}

func foo10() {
	foo9("sleep")
}

func foo11(command string) {
	// ruleid
// bearer:expected go_gosec_injection_subproc_injection
	_, _, err := syscall.StartProcess(command, []string{}, nil)
	if err != nil {
		fmt.Printf("Error: %v\n", err)
	}
}

func foo12() {
	foo11("sleep")
}

func foo13() {
	run := "sleep"
	cmd := exec.Command(run, "5")
	err := cmd.Start()
	if err != nil {
		log.Fatal(err)
	}
	log.Printf("Waiting for command to finish...")
	err = cmd.Wait()
	log.Printf("Command finished with error: %v", err)
}

func foo14() {
	// ruleid
// bearer:expected go_gosec_injection_subproc_injection
	err := exec.CommandContext(context.Background(), os.Args[0], "5").Run() // detected
	if err != nil {
		log.Fatal(err)
	}
	log.Printf("Command finished with error: %v", err)
}
