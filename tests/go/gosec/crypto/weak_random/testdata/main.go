package main

import (
	"math/rand"
	mrand "math/rand"
)

func bad1() {
// bearer:expected go_gosec_crypto_weak_random
	bad := rand.Int() // detected
	println(bad)
}

func bad2() {
	good, _ := rand.Read(nil)
	println(good)
// bearer:expected go_gosec_crypto_weak_random
	bad := mrand.Int31() // detected
	println(bad)
}

func badnewsource() {
	gen := rand.New(rand.NewSource(10))
// bearer:expected go_gosec_crypto_weak_random
	bad := gen.Int() // detected
	println(bad)
}

func badIntn() {
// bearer:expected go_gosec_crypto_weak_random
	bad := rand.Intn(10) // detected
	println(bad)
}
