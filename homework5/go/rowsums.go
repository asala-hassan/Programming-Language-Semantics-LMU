package rowsums

func Sum(a []int,chOdd chan<- int,chEven chan<-int){
    rowSum := 0
    for _,arr := range a{ 
    rowSum += arr
    }
    if len(a)%2 == 0{
        chEven <- rowSum 
    }else{
        chOdd <- rowSum 
    }
}
func RowSums(arr [][]int)(int,int){
    chEven := make(chan int)
    chOdd := make(chan int)
    totalEvenNo := 0
    totalOddnNo := 0
    finalOdd := 0
    finalEven := 0
    for _,eachArr := range arr{
        go Sum(eachArr,chOdd,chEven)
        if len(eachArr)%2 == 0{
            totalEvenNo++ 
        }else{
            totalOddnNo++  
        }
    }
    for i:= 0; i < totalOddnNo;i++{ 
        finalOdd += <-chOdd 
    }
    for i:= 0; i < totalEvenNo;i++{ 
        finalEven += <-chEven
    }
    return finalEven,finalOdd
}


