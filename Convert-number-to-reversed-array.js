/*
Given a random non-negative number, you have to return 
the digits of this number within an array in reverse order.
*/


// Solution

function digitize(n) {
  return String(n).split('').map(Number).reverse()
}

// or

function digitize(n) {
  return Array.from(String(n), Number).reverse();
}