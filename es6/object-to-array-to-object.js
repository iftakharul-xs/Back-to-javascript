let object = {a:1, b:2, c:5};

let array = Object.entries(object);


let object_again = Object.fromEntries(array)
console.log(object_again);
