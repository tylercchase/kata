function calculator(input) {
  if(input.length == 0){
    return 0;  
  }
  if(input.includes('-')){
    throw('No negative numbers allowed');
  }
  let userRegex;
  if(input.startsWith('//')){
    userRegex = input[2];
  }
  let regex = new RegExp(userRegex + '|,|\n','g');
  if(input.match(regex)){
    let output = 0;
    for(number of input.split(regex)){
      if(parseInt(number) <= 1000){
        output += parseInt(number);
      }
    }
    return output;
  }
  return parseInt(input);
}
module.exports = calculator;