arrange(`6 
7 -10 4 -3 20 -15`)

function arrange(input) {
    input = input.split("\n")
    let N = +input[0]
    let array = input[1].split(" ").map(Number)
    console.log(array)
    let pivot = 0
    let i=0
    for (let j = 0; j < N; j++) {
        if (array[j] < pivot) {
            let temp = array[i]
            array[i] = array[j]
            array[j] = temp
            i++
       }
    }
    console.log(array)
}
/**
 * O(n)
 */