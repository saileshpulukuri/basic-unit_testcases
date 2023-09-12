function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
  }
  
  function findMax(arr) {
    return Math.max(...arr);
  }
  
  module.exports = { sumArray, findMax };
  