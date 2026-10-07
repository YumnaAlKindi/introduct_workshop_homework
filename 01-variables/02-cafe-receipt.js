// =============================================
// 1. VARIABLES — Cafe receipt
// =============================================
// 1 OMR = 1000 baisa. We count in baisa to avoid decimals.
// Your order: 2 shawarma (600 baisa each) and 3 karak (150 baisa each).
// Create variables for every price and count, calculate each line and the total.
// Print the total in baisa AND in OMR (divide by 1000).
//
// Expected output:
//   Shawarma: 2 x 600 = 1200 baisa
//   Karak: 3 x 150 = 450 baisa
//   Total: 1650 baisa = 1.65 OMR


let shawarma = 600;
let karak = 150;

s_price_b = 2 * shawarma;
k_price_b = 3 * karak;
s_price_r = s_price_b / 1000;
k_price_r = k_price_b / 1000;
total_b = s_price_b + k_price_b;
total_r = s_price_r + k_price_r;


console.log(`Your price for shawarma is ${s_price_b} in baisas and ${s_price_r} in Omani rial`);
console.log(`Your price for shawarma is ${k_price_b} in baisas and ${k_price_r} in Omani rial`);
console.log(`Your total in baisas is ${total_b} and in rials is ${total_r}`);
