function rangeofnum(start, stop) {
  let output = [];
  for (let i = start; i <= stop; i++) {
    if (
      (i >= 0 && i <= 5) ||             
      (i >= 10 && i <= 15) ||           
      (i >= 25 && i <= 30) ||           
      (i >= 45 && i <= 50)              
    ) {
      output.push(i);
    }
  }
    return(output.join(', '));
}

rangeofnum(0,50); 
module.exports={rangeofnum}
