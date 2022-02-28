const res = solving(`([{[]}}])`)
console.log(res)

function solving(input) {
    let array = input.split("")
   
    let stack = []
    
    for (let i = 0; i < array.length; i++){
        let value = array[i]
        if (value == '{' || value == '(' || value == '[' ) {
            stack.push(value)
        }

        if (stack.length == 0) {
            return false
        }

        let check 
        switch (value) {
             
            case "}":
                check = stack.pop()
                if (check == "[" || check == "(")
                    return false
                break;
            
            case ")":
                check = stack.pop()
                if (check == "[" || check == "{")
                    return false
                break;
            case "]":
                check = stack.pop()
                if (check == "{" || check == "(")
                    return false
                break;
        }
    }
    return (stack.length==0)

}