const PI = 3.141592653589793
const sum = (a,b) => a+b; // no need say return explicitly
const square = a => a*a; // no bracket needed for one parameter

// const X = {
//     PI : PI,
//     sum : sum,
//     square : square
// };

/* output
{
    PI: 3.141592653589793,
    sum: [Function: sum],
    square: [Function: square]
  }
*/

const X = {
    PI,
    sum,
    square
};

// console.log(X)
/*
{
  PI: 3.141592653589793,
  sum: [Function: sum],
  square: [Function: square]
}
*/

console.log(X.PI)

