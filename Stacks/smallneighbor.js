smaller(`8
39 27 11 4 24 32 32 1`)


function smaller(input) {
    input = input.split("\n")
    let N = +input[0]
    let array = input[1].split(" ").map(Number)
    let stack = []
    for (let i = 0; i < N ; i++){
        if (array[i] > array[i - 1]) {
            stack.push(array[i-1])
        } else if (array[i] > array[i + 1]) {
            stack.push(array[i+1])   
        } else {
             stack.push(-1)   
        }
    }
    console.log(stack)
}