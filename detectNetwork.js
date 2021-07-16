// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
      // Diner's Club if Statement
  		if ((cardNumber.substring(0, 2) === '38' || cardNumber.substring(0, 2) === '39')
  			&& cardNumber.length === 14) {

  			return 'Diner\'s Club';
  		}
      // American Express if Statement
  		if ((cardNumber.substring(0, 2) === '34' || cardNumber.substring(0, 2) === '37')
  			&& cardNumber.length === 15) {

  			return 'American Express';
  		}
      /* Step 2
      Visa always has a prefix of 4 and a length of 13, 16, or 19.
      MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.
      Make sure that you continue to support Diner's Club and American Express cards. Keep testing your implementation here in the console.
      */

      //Visa if Statement
      // excluded all prefixes from Switch 
  if ((cardNumber.substring(0, 1) === '4' && cardNumber.substring(0, 4) !== '4903' &&
           cardNumber.substring(0, 4) !== '4905' && cardNumber.substring(0, 4) !== '4911' &&
           cardNumber.substring(0, 4) !== '4936')
  			&& (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19)) {

  			return 'Visa';
  		}
      // MasterCard if Statment
  if ((cardNumber.substring(0, 2) === '51' || cardNumber.substring(0, 2) === '52' ||
           cardNumber.substring(0, 2) === '53' || cardNumber.substring(0, 2) === '54' ||
           cardNumber.substring(0, 2) === '55')
  			&& cardNumber.length === 16) {

  			return 'MasterCard';
  }

      // Discover if Statement (step 3)
  if ((cardNumber.substring(0, 4) === '6011' || cardNumber.substring(0, 3) === '644' ||
          cardNumber.substring(0, 3) === '645' || cardNumber.substring(0, 3) === '646' ||
          cardNumber.substring(0, 3) === '647' || cardNumber.substring(0, 3) === '648' ||
          cardNumber.substring(0, 3) === '649' || cardNumber.substring(0, 2) === '65')
        && (cardNumber.length === 19 || cardNumber.length === 16)) {

    return 'Discover';
  }

  if ((cardNumber.substring(0, 4) === '5018' || cardNumber.substring(0, 4) === '5020' ||
          cardNumber.substring(0, 4) === '5038' || cardNumber.substring(0, 4) === '6304')
        && (cardNumber.length >= 12 && cardNumber.length <= 19)) {

    return 'Maestro';
  }
      // China UnionPay if Statement test
  if (((Number(cardNumber.substring(0, 6)) >= 622126 && Number(cardNumber.substring(0, 6)) <= 622925) ||
         (Number(cardNumber.substring(0, 3)) >= 624 && Number(cardNumber.substring(0, 3)) <= 626) ||
         (Number(cardNumber.substring(0, 4)) >= 6282 && Number(cardNumber.substring(0, 4)) <= 6288))
        && (cardNumber.length >= 16 && cardNumber.length <= 19)) {

    return 'China UnionPay';
  }
       // Switch if Statement
  if ((cardNumber.substring(0, 4) === '4903' || cardNumber.substring(0, 4) === '4905' ||
            cardNumber.substring(0, 4) === '4911' || cardNumber.substring(0, 4) === '4936' ||
            cardNumber.substring(0, 6) === '564182' || cardNumber.substring(0, 6) === '633110' ||
            cardNumber.substring(0, 4) === '6333' || cardNumber.substring(0, 4) === '6759')
           && (cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19)) {

    return 'Switch';
  } else {
  			return undefined;
  		}
  // Once you've read this, go ahead and try to implement this function, then return to the console.
};
