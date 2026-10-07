// =============================================
// 4. ARRAYS — Reverse an array
// =============================================
// Create a NEW array reversed with the cities in the opposite order.
// Do NOT use .reverse() — use a loop that goes from the end to the start.
// Print the new array.
//
// Expected output:
//   [ 'Sur', 'Nizwa', 'Sohar', 'Salalah', 'Muscat' ]
//   (the browser console shows arrays a bit differently — the order is what matters)

const cities1 = ["Muscat", "Salalah", "Sohar", "Nizwa", "Sur"];

let rev_cities = [];
let length = (cities1.length) - 1

for(i = length ; i >= 0; i-- ){
    rev_cities.push(cities1[i]);
}
console.log(rev_cities)