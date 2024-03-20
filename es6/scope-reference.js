function hello(name){
    // this is a function scope
    var greeting = 'Hello';
    return greeting + ' ' + name
}

console.log(hello('Node')) // Hello Node
//console.log(greeting); // ReferenceError: greeting is not defined

{
    //this is a block scope variable
    var scopeVariable = 45;
    {
        //this is a nested block scope variable
        var nestedScopeVariable = 37;
    }

}

console.log(scopeVariable) // 45
console.log(nestedScopeVariable) // 37

if(true){
    var letter1 = "A";   
}

console.log(letter1) // A

for(var  i= 0; i < 10; i++){
    if(i == 9) console.log(i); // i will be max 9 not 10
}
console.log(i) // i is 10 now

