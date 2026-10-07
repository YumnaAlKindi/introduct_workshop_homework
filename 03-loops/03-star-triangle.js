// =============================================
// 3. LOOPS — Star triangle
// =============================================
// Create a variable rows = 5 and print a triangle of stars.
// Hint: start with let line = ""; and add one "*" to it in every loop step.
//
// Expected output:
//   *
//   **
//   ***
//   ****
//   *****

let rows = 5;
let stars = "";
for( i = rows; rows >=0; rows--){
    console.log(stars);
    stars+= "*";
}
