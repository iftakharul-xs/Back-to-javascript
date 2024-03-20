let object = {a:1, b:5, c:5};

let copy = {object};
console.log(copy) // { object: { a: 1, b: 5, c: 5 } }

copy = {...object};
console.log(copy) // { a: 1, b: 5, c: 5 }