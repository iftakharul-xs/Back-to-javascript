const toDecimal = (base, ...numbers) => {
    // console.log(numbers)
    console.log([0,...numbers])
    return numbers.map(number => parseInt(number, base));
}

console.log(
    toDecimal(10, 101,102,103,104,105,106)
);

