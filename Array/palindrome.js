palindrome(`8
7 10 44 4 4 44 -10 7`)

function palindrome(input) {
    input = input.split("\n")
    let N = +input[0]
    let array = input[1].split(" ").map(Number)
    let result = isPalindrome(array, N)
    console.log(result)
}
function isPalindrome(array,N) {
    let left = 0
    let right = N - 1
    let isPalindrome = true
    while (left<right) {
        if (array[left] == array[right]) {
            left++
           right--
        } else {
            return false
        }
    }
    return isPalindrome
   
}
