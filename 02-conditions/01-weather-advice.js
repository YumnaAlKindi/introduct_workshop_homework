// =============================================
// 2. CONDITIONS — Weather advice
// =============================================
// Create a variable temperature = 43.
// Print advice:
//   40 or more -> "Stay inside, it's very hot!"
//   30 or more -> "Hot, drink lots of water."
//   20 or more -> "Nice weather, go outside."
//   otherwise  -> "Cool, take a jacket."
// After it works, change temperature to 35, 25 and 15 and check every branch.
//
// Expected output:
//   43°C: Stay inside, it's very hot!

const temp = 4;

if (temp >=  40){console.log("Stay inside, its very hot")}
else if (temp >=30){console.log("Hot, drink lots of water")}
else if (temp >= 20){console.log("Nice weather, go outside")}
else {console.log("Cool, take a jacket")}