// =============================================
// 1. VARIABLES — Trip cost
// =============================================
// You drive from Muscat to Salalah.
// Create variables:
//   distance = 1000      (km)
//   fuelPer100km = 8     (liters the car uses for every 100 km)
//   fuelPrice = 0.25     (OMR per liter)
// Calculate how many liters you need and how much the fuel costs.
// Print the result using template literals.
//
// Expected output:
//   Trip: 1000 km
//   Fuel needed: 80 liters
//   Fuel cost: 20 OMR


let distance = 1000;
let fuelPer100km = 8;
let fuelPrice = 0.25;

let liters = (distance/100) * fuelPer100km;
let fuelCost = liters * fuelPrice;

console.log(`You will need ${liters} liters of fuel with the price of ${fuelCost}!`);

