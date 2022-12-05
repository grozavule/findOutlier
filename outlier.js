const findOutlier = numbers => {
    let oddNumbers = numbers.filter(elem => elem % 2 === 0);
    let evenNumbers = numbers.filter(elem => elem % 2 !== 0);
    if(evenNumbers.length < oddNumbers.length)
    {
        return evenNumbers.filter(elem => elem % 2 !== 0)[0];
    }
    else
    {
        return oddNumbers.filter(elem => elem % 2 === 0)[0];
    }
}

let set1 = [2, 4, 0, 100, 4, 11, 2602, 36];
let set2 = [160, 3, 1719, 19, 11, 13, -21];

console.log(findOutlier(set1));
console.log(findOutlier(set2));
