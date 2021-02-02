function calculator(input) {
  if(input.length == 0){
    return 0;  
  }
  if(input.includes('-')){
    throw('No negative numbers allowed');
  }
  if(input.match(/,|\n/g)){
    let output = 0;
    for(number of input.split(/,|\n/g)){
      if(parseInt(number) <= 1000){
        output += parseInt(number);
      }
    }
    return output;
  }
  return parseInt(input);
}
module.exports = calculator;