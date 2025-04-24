/**
 * Creates a memoized version of a function that caches its results
 * @param {Function} fn - The function to memoize
 * @returns {Function} - A new function that caches results of the original function
 */
function memoize(fn) {
  // Create a Map to store cached results
  // Maps are used because they can use any value as a key (unlike objects)
  const cache = new Map();
  // Return a new function that wraps the original function
  //...args is used to capture all arguments passed to the function
  return function (...args) {
    //we can access the arguments by using the rest operator
    console.log("args", ...args);
    // Create a unique key for the arguments by converting them to a string
    // This allows us to cache results for different argument combinations
    const key = JSON.stringify(args);
    console.log("cache", cache);
    // Check if we already have a result for these arguments
    if (cache.has(key)) {
      console.log("Cache hit!");
      // Return the cached result if it exists
      return cache.get(key);
    }

    // If we don't have a cached result, compute it
    console.log("Cache miss, computing...");
    // Call the original function with the arguments

    const result = fn(...args);

    // Store the result in the cache for future use
    cache.set(key, result);

    // Return the computed result
    return result;
  };
}

module.exports = memoize;
