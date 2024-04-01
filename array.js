const prompt = require("prompt-sync")({ sigint: true });

function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;

  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}

function filterPrimes(arr) {
  return arr.filter(isPrime);
}

// Take input from the user
const inputArray = prompt("Enter an array of numbers (comma-separated): ").split(",").map(Number);

// Filter prime numbers from the input array and display the result
console.log("Prime numbers in the input array:", filterPrimes(inputArray));