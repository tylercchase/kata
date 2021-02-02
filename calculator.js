function calculator(input) {
  if(input.length == 0){
    return 0;  
  }
  if(input.includes('-')){
    throw('No negative numbers allowed');
  }
  if(input.includes(',') || input.includes('\n')){
    let output = 0;
    const numbers = input.split(/,|\n/g);
    for(number of numbers){
      if(parseInt(number) <= 1000){
        output += parseInt(number);
      }
    }
    return output;
  }else{
    return parseInt(input);
  }
}
module.exports = calculator;