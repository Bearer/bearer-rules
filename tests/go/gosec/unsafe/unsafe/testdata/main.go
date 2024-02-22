package main

import (
	"fmt"
	"unsafe"
)

type Fake struct{}

func (Fake) Good() {}

func main() {
	unsafeM := Fake{}
	unsafeM.Good()
	intArray := [...]int{1, 2}
	fmt.Printf("\nintArray: %v\n", intArray)
	intPtr := &intArray[0]
	fmt.Printf("\nintPtr=%p, *intPtr=%d.\n", intPtr, *intPtr)
// bearer:expected go_gosec_unsafe_unsafe
	addressHolder := uintptr(unsafe.Pointer(intPtr)) + unsafe.Sizeof(intArray[0])
// bearer:expected go_gosec_unsafe_unsafe
	intPtr = (*int)(unsafe.Pointer(addressHolder))
	fmt.Printf("\nintPtr=%p, *intPtr=%d.\n\n", intPtr, *intPtr)
}
