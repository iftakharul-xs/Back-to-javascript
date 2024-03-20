let user = null
// console.log(user.k) // TypeError: Cannot read properties of null (reading 'k') 


let object = {node: 1};
console.log(object?.k) // undefined 
console.log(object?.node) // 1 

// optional chaining with null coalescing operator
console.log(object?.k ?? 'nothing here') // undefined 
