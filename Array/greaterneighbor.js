greatest(`8
1 2 3 4 2 1 6 5`)

function greatest(input) {
    input = input.split("\n")
    let N = +input[0]
    let array = input[1].split(" ").map(Number)
     let count=0
    for (let i = 1; i < N - 1; i++){
        if (array[i] > array[i + 1] && array[i]>array[i-1]) {
            count += 1
        }
    }
    console.log(count)
    
}