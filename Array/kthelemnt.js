kthelemnt(`6 3
7 10 4 3 20 15`)

function kthelemnt(input) {
    input = input.split("\n")
    let inp = input[0].split(" ")
    let N = +inp[0]
    let K = +inp[1]
    let array = input[1].split(" ").map(Number)
    let min = Infinity
    for (let i = 0; i < N; i++) {
        if (min > array[i]) { 
            min = array[i]
        }
    }
    console.log(min)
}