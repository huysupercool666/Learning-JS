//Bai tu lam lai tim so nguyen to, cho mang so nguyen duong in ra mang so nguyen to.
function isPrime(testNumber) {
  if (testNumber === 2) {
    return true;
  } else if (testNumber <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(testNumber); i++) {
    if (testNumber % i === 0) {
      return false;
    }
  }
  return true;
}
function findPrimeNumber(inputArray) {
  if (!Array.isArray(inputArray)) {
    return "The input must be Array";
  }
  let result = [];
  for (let i = 0; i < inputArray.length; i++) {
    if (isPrime(inputArray[i])) {
      result.push(inputArray[i]);
    }
  }
  return result;
}

console.log(isPrime(66));
console.log(findPrimeNumber([3, 2, 1, 10, 9, 77, 6, 97]));
