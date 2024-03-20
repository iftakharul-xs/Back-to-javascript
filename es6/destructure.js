

const X = {
     PI: 3.141592653589793,
     sum: (a,b) => a+b, // no need say return explicitly
     square: a => a*a, // no bracket needed for one parameter
};
// const square1 = X.square;

// const { PI } = X;
// console.log(PI) //3.141592653589793
const { PI, sum, square } = X;
// console.log(sum(5,5)); // 10

// // destructure function parameter
// const toDecimal = ({base, number}) => {
//     return parseInt(number, base);
// }

// console.log(
//     toDecimal({base:3, number:101}) // 10
// );

// destructure function parameter with default value
const toDecimal = ({base=3, number}) => {
    return parseInt(number, base);
}

console.log(
    toDecimal({number:101}) // 10
);