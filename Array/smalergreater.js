smaller(`9
5 1 4 7 6 8 10 7 9`)
// Given an array, find an element before which all elements are 
// smaller than it, and after which all are greater than it.Return 
// the index of the element if there is such an element, otherwise, return -1.

function smaller(input) {
    input = input.split("\n")
    let N = input[0]
    let array = input[1].split(" ").map(Number)

    let min = []
    let max = []
    let ele = -1
    let small = array[N-1]
    let big = array[0]
    let isFound = false
    
    
    for (let i = 0; i < N; i++){
        if (array[i] > big) {
            max.push(array[i])
            big = array[i]
        } else {
            max.push(big)
        }
    }
    console.log(max)
    for (let i = N - 1; i >=0; i--){
        if (array[i] < small) {
            min.push(array[i])
            small = array[i]
        } else {
            min.push(small)
        }
    }
    console.log(min)
    for (let k = 0; k < N; k++){
        if (k != 0 && k != N - 1) {
            if (min[k] == max[k]) {
                isFound = true
                 ele = k
                break
            }
        }
    }
    if (isFound) {
        console.log(ele)
    } else {
        console.log(ele)
    }
}