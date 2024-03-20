let array = [1,5,6,];
let array2 = [8,9,7];

let merged_array = [array, array2]; 
console.log(merged_array);// [ [ 1, 5, 6 ], [ 8, 9, 7 ] ]

merged_array = [...array ,...array2]; 
console.log(merged_array);//[ 1, 5, 6, 8, 9, 7 ]
