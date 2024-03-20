const fs = require('fs');

//  const square = function(a){
//     console.log(a*a)
//  }
//  square(5); // 25


//  const square = (a) => {
//     console.log(a*a)
//  }
//  square(5); // 25


//   const square = a =>   console.log(a*a)
//   square(5); // 25

// [1,2,3].map(a => console.log(a * a)); // one liner


// let util = {
    
//     square : function(a){
//         return a*a;
//     }

// }

// console.log(util.square(5)); // 25

// let util = {

//     // short hand
//     square(a){
//         return a*a;
//     }

// }

// console.log(util.square(5)); // 25


// let util = {

//     squareOld: function(a){
//         return a*a;
//     },
//     // short hand
//     square:(a) => {
//         return a*a;
//     }

// }

// console.log(util.square(5)); // 25

exports.i = "am exports";
let util = {

    f1: function(){
        return this;
    },
    // short hand
    f2: () => {
        return this;
    }

}

// console.log(util.f1()); // { f1: [Function: f1], f2: [Function: f2] }
// console.log(util.f2()); // { i: 'am exports' }