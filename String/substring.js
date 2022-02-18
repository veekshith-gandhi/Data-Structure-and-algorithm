substring(`abcabcbb`)

function substring(input) {
    let arr = input.split("")
    let count =0
    for (let i = 0; i < arr.length; i++) {
        let str = ""
        for (let j = i; j < arr.length; j++){
            str = str + arr[j]
            console.log(str)
            count++
        }
        
    }
    console.table(count)
}