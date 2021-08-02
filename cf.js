// function definition
function calculateBill(billAmount, taxRate) {
    // this is the function body
    console.log("Running Calculate Bill!!");
    const total = billAmount * (1 + taxRate);
    return total;
  }
const myTotal = calculateBill(100, 0.13);
console.log(myTotal);


const firstName = "wes";
function sayHiTo (firstName) {
  return `Hello ${firstName}`;
}
const greeting = sayHiTo("Wes");
console.log(greeting);

