// =============================================
// 4. ARRAYS — Exam results
// =============================================
// 1. Count how many students passed (score 60 or more).
// 2. Find the lowest score WITHOUT Math.min.
//
// Expected output:
//   Passed: 4 of 7
//   Lowest score: 39

const scores = [78, 45, 92, 60, 55, 88, 39];

let pass = 0;
let min = 100;

for (const item of scores){
    if (item < min ){min = item}
    if (item >= 60){pass++}
}

console.log(`Passed : ${pass} of ${scores.length}`);
console.log(`Lowest score: ${min}`);