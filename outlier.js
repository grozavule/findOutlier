/*
You are given an array (which will have a length of at least 3, but could be very large) containing integers. 
The array is either entirely comprised of odd integers or entirely comprised of even integers except for a 
single integer N. Write a function that takes the array as an argument and returns this “outlier” N.

Examples:

[2, 4, 0, 100, 4, 11, 2602, 36] Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21] Should return: 160 (the only even number)
*/

const findOutlier = numbers => {
    let evenNumbers = numbers.filter(elem => elem % 2 === 0);
    let oddNumbers = numbers.filter(elem => elem % 2 !== 0);
    if(evenNumbers.length < oddNumbers.length)
    {
        return evenNumbers[0];
    }
    else
    {
        return oddNumbers[0];
    }
}

let set1 = [2, 4, 0, 100, 4, 11, 2602, 36];
let set2 = [160, 3, 1719, 19, 11, 13, -21];

console.log(findOutlier(set1));
console.log(findOutlier(set2));
