// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  if (cardNumber.length === 14 && /^3[89]/.test(cardNumber))
    return 'Diner\'s Club';
  else if (cardNumber.length === 15 && /^3[47]/.test(cardNumber))
    return 'American Express';
  else if (/^4/.test(cardNumber) && (cardNumber.length === 13 || cardNumber.length ===16 || cardNumber.length ===19))
    return 'Visa';
  else if (/^5[1-5]/.test(cardNumber) && cardNumber.length === 16)
    return 'MasterCard';
  else if (/^6011|^64[4-9]|^65/.test(cardNumber) && (cardNumber.length === 16 || cardNumber.length === 19))
    return 'Discover';
  else if (/^5018|^5020|^5038|^6304/.test(cardNumber) && (cardNumber.length >= 12 && cardNumber.length <= 19))
    return 'Maestro';
  else
    return null;
  

  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  //Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
//Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.
//slkdjf 
//
};


