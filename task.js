function rangeofnum(from, to) {
  

  const result = [];

  for (let i = from; i <= to; i++) {
    if (i % 5 === 0 || (i >= 10 && i <= 14) || (i >= 25 && i <= 30) || (i >= 45 && i <= 50)) {
      result.push(i);
    }
  }

  return result.join(",");
}

// Example usages:
console.log(rangeofnum(50,50));
module.exports={rangeofnum}