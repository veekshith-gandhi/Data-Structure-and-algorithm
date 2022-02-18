nextGreater1(`7
4 5 15 6 25 2 5`)

function nextGreater1(input) {
    input = input.split("\n")
    let n = +input[0]
    let array = input[1].split(" ").map(Number)
    let res = ""
   
    for (let i = 0; i < n; i++){
         let isFound = true
        for (let j = i + 1; j < n; j++){
            if (array[i] < array[j]) {
                isFound = false
                res += array[j]+" "
                break  
            }
        }
           if (isFound) {
              res += -1+" "  
             }
    }
    console.log(res)
}
/**
 * O(n*2)
 */

nextGreater2(`7
4 5 15 6 25 2 5`)

function nextGreater2(input) {
    input = input.split("\n")
    let n = +input[0]
    let array = input[1].split(" ").map(Number)
    let stack = []
    let res = ""
    for (let i = n - 1; i >= 0; i--){
        while ( stack[stack.length-1] <array[i] && stack.length !==0) {
            stack.pop()
        }
        if (stack.length == 0) {
            res = -1+" "+res
        } else {
            res = stack[stack.length-1]+" "+res
        }
        stack.push(array[i])
    }
    console.log(res)
}
/**
 * O(n)
 */

prevsmaller(`7
4 5 15 6 25 2 5`)

function prevsmaller(input) {
    input = input.split("\n")
    let n = +input[0]
    let array = input[1].split(" ").map(Number)
    let stack = []
    let res = ""
    for (let i = 0; i <n; i++){
        while ( stack[stack.length-1] > array[i] && stack.length !==0) {
            stack.pop()
        }
        if (stack.length == 0) {
            res += -1+" "
        } else {
            res += stack[stack.length-1]+" "
        }
        stack.push(array[i])
    }
    console.log(res)
}