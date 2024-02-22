package main

import (
	"fmt"
	"strconv"
)

func foo1() {
	bigValue, _ := strconv.Atoi("2147483648")
// bearer:expected go_gosec_memory_integer_overflow
	value := int32(bigValue)
	fmt.Println(value)
}

func foo2() {
	bigValue, _ := strconv.Atoi("32768")
// bearer:expected go_gosec_memory_integer_overflow
	if int16(bigValue) < 0 {
		fmt.Println(bigValue)
	}
}

func foo3() {
	bigValue, err := strconv.Atoi("2147483648")
	if err != nil {
		panic(err)
	}
	fmt.Println(bigValue)
}

func foo4() {
	bigValue, err := strconv.Atoi("2147483648")
	if err != nil {
		panic(err)
	}
	fmt.Println(bigValue)
	test()
}

func test() {
	bigValue := 30
	value := int32(bigValue)
	fmt.Println(value)
}

func foo5() {
	value := 10
	if value == 10 {
		value, _ := strconv.Atoi("2147483648")
		fmt.Println(value)
	}
	v := int32(value)
	fmt.Println(v)
}
