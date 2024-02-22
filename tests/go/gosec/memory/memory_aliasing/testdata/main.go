package main

import "fmt"

var vector []*string

func appendVector(s *string) {
	vector = append(vector, s)
}

func printVector() {
	for _, item := range vector {
		fmt.Printf("%s", *item)
	}
	fmt.Println()
}

func foo() (int, **string, *string) {
	for _, item := range vector {
		return 0, &item, item
	}
	return 0, nil, nil
}

func appendrange() {
	for _, item := range []string{"A", "B", "C"} {
// bearer:expected go_gosec_memory_memory_aliasing
		appendVector(&item)
	}

	printVector()

	zero, c_star, c := foo()
	fmt.Printf("%d %v %s", zero, c_star, c)
}

func saferange() {
	sampleMap := map[string]string{}
	sampleString := "A string"
	for sampleString, _ = range sampleMap {
		fmt.Println(sampleString)
	}
}

func shouldNotBeReported() {
	array := []string{"a", "b"}
	for _, s := range array {
		fmt.Println(s)
	}
}

func shouldBeReported() {
	array := []string{"a", "b"}
	for i, s := range array {
// bearer:expected go_gosec_memory_memory_aliasing
		fmt.Println("%d %p", i, &s)
	}
}
