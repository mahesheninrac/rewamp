// function findMissingNumber(arr) {
//     let n = arr.length + 1;
//     const expectedSum = (n * (n + 1)) / 2
//     const actualSum = arr.reduce((a, b) => a + b, 0)
//     return expectedSum - actualSum
// }

// console.log(findMissingNumber([8, 2, 4, 5, 3, 7, 1])); // Output: 6

function weightedUniformString(s, queries) {
    const weights = new Set()
    // console.log(weights)
    let currentChar = "";
    let currentCount = 0;

    for (let char of s) {
        const charWeight = char.charCodeAt(0) - 96;

        if (char === currentChar) {
            currentCount++;
        } else {
            currentChar = char;
            currentCount = 1;
        }

        weights.add(charWeight * currentCount)
    }

    return queries.map(q => weights.has(q) ? "Yes" : "No")
}

let s = "aaabbbbcccddd";
let queries = [5, 9, 7, 8, 12, 5];

const result = weightedUniformString(s, queries)
console.log(result)