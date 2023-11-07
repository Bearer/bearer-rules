package main

import (
	"fmt"
	"math/big"
)

func bad1() {
	r := big.Rat{}
	r.SetString("13e-9223372036854775808")
	fmt.Println(r)
}

func bad2(input string) {
	r := big.Rat{}
	r.SetString(input)
	fmt.Println(r)
}
