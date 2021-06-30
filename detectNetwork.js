// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

// Warning: Regular Expressions (RegEx) are NOT ALLOWED on this assignment!

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  if (cardNumber === undefined) {
    return '';
  }
  var inputNum = cardNumber;
  if ((inputNum[1] === '8' || inputNum[1] === '9') && inputNum.length === 14) {
    return 'Diner\'s Club';
  } else if ((inputNum[1] === '4' || inputNum[1] === '7') && inputNum.length === 15) {
    return 'American Express';
  // eslint-disable-next-line max-len
  } else if (inputNum[0] === '4' && (inputNum.length === 13 || inputNum.length === 16 || inputNum.length === 19)) {
    return 'Visa';
  } else if ((Number(inputNum.slice(0, 2)) >= 51 
  && Number(inputNum.slice(0, 2)) <= 55) && inputNum.length === 16) {
    return 'MasterCard';
  } else if ((inputNum.slice(0, 4) === '6011' 
  || (Number(inputNum.slice(0, 3)) >= 644 && Number(inputNum.slice(0, 3)) <= 649)
  || inputNum.slice(0, 2) === '65') 
  && (inputNum.length === 16 || inputNum.length === 19)) {
    return 'Discover';
  } else if ((inputNum.slice(0, 4) === '5018' 
  || inputNum.slice(0, 4) === '5020' 
  || inputNum.slice(0, 4) === '5038'
  || inputNum.slice(0, 4) === '6304')
  && (inputNum.length >= 12 && inputNum.length <= 19)) {
    return 'Maestro';
  } else if (((Number(inputNum.slice(0, 6)) >= 622126 
  && Number(inputNum.slice(0, 6)) <= 622925) 
  || (Number(inputNum.slice(0, 3)) >= 624 
  && Number(inputNum.slice(0, 3)) <= 626)
  || (Number(inputNum.slice(0, 4)) >= 6282 
  && Number(inputNum.slice(0, 4)) <= 6288)) 
  && (inputNum.length === 16 
    || inputNum.length === 18 
    || inputNum.length === 19)) {
    return 'China UnionPay';
  } else if ((inputNum.slice(0, 4) === '4903' 
    || inputNum.slice(0, 4) === '4905'
    || inputNum.slice(0, 4) === '4911'
    || inputNum.slice(0, 4) === '4936'
    || inputNum.slice(0, 6) === '564182'
    || inputNum.slice(0, 6) === '633110'
    || inputNum.slice(0, 4) === '6333'
    || inputNum.slice(0, 4) === '6759') 
    && (inputNum.length === 16 
      || inputNum.length === 18
      || inputNum.length === 19)) {
    return 'Switch';
  }
};

