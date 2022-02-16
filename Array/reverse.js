reverse1(`5
1 2 3 4 5`)

function reverse1(input) {
    input = input.split("\n")
    let N = input[0]
    let array = input[1].split(" ").map(Number)
    let newArray= []
    for(let i=N-1;i>=0;i--){
     newArray.push(array[i])
    }
    console.log(newArray.join(" "))

}
/**
 * O(n)
 */


reverse2(`5
1 2 3 4 5`)
function reverse2(input) {
    input = input.split("\n")
    let N = input[0]
    let array = input[1].split(" ").map(Number)
    let left =0
    let right = N-1
     while (left < right) {
         let temp = array[left]
         array[left] = array[right]
         array[right] = temp
         left++
         right--
     }
    console.log(array.join(" "))

}
/**
 * two pointer optimize the run time 
 * O(1)
 */