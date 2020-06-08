package exercises

import (
	"errors"
	"fmt"
	"math"
)

type Cylinder struct {
	radius, height float64
}

func (c Cylinder) SurfaceArea() float64 {
	return 2.0*math.Pi*c.radius*c.height + 2.0*math.Pi*math.Pow(c.radius, 2)
}

func (c Cylinder) Volume() float64 {
	return math.Pi * math.Pow(c.radius, 2) * c.height
}

func Change(amount int) ([]int, error) {

	if amount < 0 {
		return nil, errors.New("amount cannot be negative")
	}

	var quarters = (amount / 25)
	amount = amount % 25

	var dimes = (amount / 10)
	amount = amount % 10

	var nickels = (amount / 5)

	var pennies = amount % 5

	var s = []int{quarters, dimes, nickels, pennies}
	return s, nil
}

func Powers(base int, limit int, ch chan<- int) {

	for power := 1; power <= limit; power *= base {
		ch <- power
	}

}

func main2() {
	ch := make(chan int, 100)
	go Powers(2, 70, ch)
	for p := range ch {
		fmt.Println(p)
	}

	close(ch)
}
