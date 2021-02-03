function calculator(input) {
  if(input.length == 0){
    return 0;  
  }
  if(input.includes('-')){
    throw('No negative numbers allowed');
  }
  let regex = new RegExp(',|\n','g');
  if(input.startsWith('//')){
    if(input[3] == '\n'){
      regex = new RegExp('\\' + input[2] + '|,|\n','g');
    }else{
      regex = new RegExp('\\' + input.substring(input.indexOf('[')+1,input.indexOf(']')) + '|,|\n','g');;

    }
  }
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