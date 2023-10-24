package main

import (
	"math/rand"
	mrand "math/rand"
)

func bad1() {
	bad := rand.Int() // detected
	println(bad)
}

func bad2() {
	good, _ := rand.Read(nil)
	println(good)
	bad := mrand.Int31() // detected
	println(bad)
}

func badnewsource() {
	gen := rand.New(rand.NewSource(10))
	bad := gen.Int() // detected
	println(bad)
}

func badIntn() {
	bad := rand.Intn(10) // detected
	println(bad)
}
