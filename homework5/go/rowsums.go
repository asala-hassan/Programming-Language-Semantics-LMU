package rowsums

func Sum(row []int, chOdd chan<- int, chEven chan<- int) {
	rowSum := 0
	for _, value := range row {
		rowSum += value
	}
	if len(row)%2 == 0 {
		chEven <- rowSum
	} else {
		chOdd <- rowSum
	}
}
func RowSums(matrix [][]int) (int, int) {
	chEven := make(chan int)
	chOdd := make(chan int)
	finalOdd := 0
	finalEven := 0
	for _, eachmatrix := range matrix {
		go Sum(eachmatrix, chOdd, chEven)
	}
	for range matrix {
		select {
		case oddValue := <-chOdd:
			finalOdd += oddValue
		case evenValue := <-chEven:
			finalEven += evenValue
		}
	}
	return finalEven, finalOdd
}