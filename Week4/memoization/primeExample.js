const memoize = require("./memoize");

// prime number detector
function isPrime(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;

  // Check divisibility by all numbers up to sqrt(n)
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// Create memoized version
const memoizedIsPrime = memoize(isPrime);

// Test prime number detection
function testPrimeDetection() {
  console.log("=== Prime Number Detection ===");
  const largeNumber = 10000000019; // A large prime number

  console.log("\nWithout Memoization:");
  console.time("Non-memoized Prime");
  console.log(`Is ${largeNumber} prime?`, isPrime(largeNumber));
  console.timeEnd("Non-memoized Prime");

  console.log("\nWith Memoization:");
  console.time("Memoized Prime");
  console.log(`Is ${largeNumber} prime?`, memoizedIsPrime(largeNumber));
  console.timeEnd("Memoized Prime");

  console.log("\nSecond Call:");
  console.time("Memoized Prime Second Call");
  console.log(`Is ${largeNumber} prime?`, memoizedIsPrime(largeNumber));
  console.timeEnd("Memoized Prime Second Call");
}

module.exports = testPrimeDetection;
