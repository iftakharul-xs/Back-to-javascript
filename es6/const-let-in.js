for(let  i= 0; i < 10; i++){
    if(i == 9) console.log(i); // 
}
// console.log(i) // ReferenceError: i is not defined

{
    let scopeVariable = 42;
    const scopeConstant = 37;
    // scopeConstant = 38; //TypeError: Assignment to constant variable.
    
    {
        console.log(scopeVariable) // 42
        console.log(scopeConstant) // 37
    }
}


// console.log(scopeVariable) // ReferenceError: scopeVariable is not defined
// console.log(scopeConstant) // ReferenceError: scopeConstant is not defined

{
    {
        let scopeVariable = 42;
        const scopeConstant = 37;
        
        {
            console.log(scopeVariable) // 42
            console.log(scopeConstant) // 37
        }
    }
}


{
    {
        let scopeVariable = 42;
        const scopeConstant = 37;
    }

    {
        // console.log(scopeVariable) // ReferenceError: scopeVariable is not defined
        // console.log(scopeConstant) // ReferenceError: scopeConstant is not defined
    }
}



if(true){
    let letter1 = "A";   
}

// console.log(letter1) // ReferenceError: letter1 is not defined


const obj = {a:44}

obj.a = 55;
console.log(obj) //{ a: 55 }

// obj = 55;
//console.log(obj) //TypeError: Assignment to constant variable.

let obj2 = {a:44}

obj2.a = 88;
console.log(obj2) //{ a: 88 }

obj2 = 58;
console.log(obj2) // 58


// https://www.codecademy.com/resources/docs/javascript/objects/freeze