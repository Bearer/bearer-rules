package main

import (
	"bufio"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"path/filepath"
)

func bad(args []string) {
	filepath := args[0]
	// bearer:expected go_gosec_filesystem_filereadtaint
	os.Open(filepath)
}

func mainenvreadfile() {
	f := os.Getenv("tainted_file")
	// bearer:expected go_gosec_filesystem_filereadtaint
	body, err := ioutil.ReadFile(f)
	if err != nil {
		log.Printf("Error: %v\n", err)
	}
	log.Print(body)

}

func mainqueryopen() {
	http.HandleFunc("/bar", func(w http.ResponseWriter, r *http.Request) {
		title := r.URL.Query().Get("title")
		// bearer:expected go_gosec_filesystem_filereadtaint
		f, err := os.Open(title)
		if err != nil {
			fmt.Printf("Error: %v\n", err)
		}
		body := make([]byte, 5)
		if _, err = f.Read(body); err != nil {
			fmt.Printf("Error: %v\n", err)
		}
		fmt.Fprintf(w, "%s", body)
	})
	log.Fatal(http.ListenAndServe(":3000", nil))
}

func mainqueryopenfile() {
	http.HandleFunc("/bar", func(w http.ResponseWriter, r *http.Request) {
		title := r.URL.Query().Get("title")
		// bearer:expected go_gosec_filesystem_filereadtaint
		f, err := os.OpenFile(title, os.O_RDWR|os.O_CREATE, 0755)
		if err != nil {
			fmt.Printf("Error: %v\n", err)
		}
		body := make([]byte, 5)
		if _, err = f.Read(body); err != nil {
			fmt.Printf("Error: %v\n", err)
		}
		fmt.Fprintf(w, "%s", body)
	})
	log.Fatal(http.ListenAndServe(":3000", nil))
}

func mainenvreadfileappend() {
	f2 := os.Getenv("tainted_file2")
	// bearer:expected go_gosec_filesystem_filereadtaint
	body, err := ioutil.ReadFile("/tmp/" + f2)
	if err != nil {
		log.Printf("Error: %v\n", err)
	}
	log.Print(body)
}

func mainstdinopenjoin() {
	reader := bufio.NewReader(os.Stdin)
	fmt.Print("Please enter file to read: ")
	file, _ := reader.ReadString('\n')
	file = file[:len(file)-1]
	// bearer:expected go_gosec_filesystem_filereadtaint
	f, err := os.Open(filepath.Join("/tmp/service/", file))
	if err != nil {
		fmt.Printf("Error: %v\n", err)
	}
	contents := make([]byte, 15)
	if _, err = f.Read(contents); err != nil {
		fmt.Printf("Error: %v\n", err)
	}
	fmt.Println(string(contents))
}

func mainenvreadfilejointwice() {
	dir := os.Getenv("server_root")
	f3 := os.Getenv("tainted_file3")
	// edge case where both a binary expression and file Join are used.
	// bearer:expected go_gosec_filesystem_filereadtaint
	body, err := ioutil.ReadFile(filepath.Join("/var/"+dir, f3))
	if err != nil {
		log.Printf("Error: %v\n", err)
	}
	log.Print(body)
}

func maincleanshouldTN() {
	repoFile := "path_of_file"
	cleanRepoFile := filepath.Clean(repoFile)
	_, err := os.OpenFile(cleanRepoFile, os.O_RDONLY, 0600)
	if err != nil {
		panic(err)
	}
}

func openFile(filePath string) {
	_, err := os.OpenFile(filepath.Clean(filePath), os.O_RDONLY, 0600)
	if err != nil {
		panic(err)
	}
}

func mainintraproceduralopen() {
	repoFile := "path_of_file"
	openFile(repoFile)
}

func mainfilepathrelTN() {
	repoFile := "path_of_file"
	relFile, err := filepath.Rel("./", repoFile)
	if err != nil {
		panic(err)
	}
	_, err = os.OpenFile(relFile, os.O_RDONLY, 0600)
	if err != nil {
		panic(err)
	}
}
