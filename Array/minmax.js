minmax(`6
3000 2 445 21 330 1000`)

function minmax(input) {
    input = input.split("\n")
    let N = input[0]
    let array = input[1].split(" ").map(Number)
    let min = Infinity
    let max= -Infinity
    for(let i=0;i<N;i++){
        if (min > array[i]) {
            min = array[i]
        }
        if (max < array[i]) {
            max = array[i]
        }
    }
    console.log(min,max)
}
/**
 * O(n)
 */