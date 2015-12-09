package rand

import (
	"time"
)

var rand_seed uint32

func init() {
	rand_seed = uint32(time.Now().Unix())
}

func SetSeed(seed uint32) {
	rand_seed = seed
}

func Rand() uint32 {
	rand_seed = (rand_seed * uint32(0x41A7)) % ((1 << 31) - 1)
	return rand_seed
}

//随机0 ~ max-1 之间的数
func RandMax(max uint32) uint32 {
	return Rand() % max
}
