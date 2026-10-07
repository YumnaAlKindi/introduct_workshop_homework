// =============================================
// 4. ARRAYS — STRETCH: Find the index
// =============================================
// Find the index of target in the array WITHOUT .indexOf().
// Print "Nizwa is at index 3", or "Ibri not found" if it is not in the array.
// Test with target = "Ibri" too.
//
// Expected output:
//   Nizwa is at index 3

const cities2 = ["Muscat", "Salalah", "Sohar", "Nizwa", "Sur"];
const target = "Nizwa";

let city = "Sohar";
let index = 0;
let count = 0;

for (const item of cities2){
    if(item == city){ index = count}
    count++
}
console.log(`${city} is at index ${index}`);
