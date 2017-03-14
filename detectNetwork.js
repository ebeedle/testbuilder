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
  else if (/^4903|^4905|^4911|^4936|^564182|^633110|^6333|^6759/.test(cardNumber) && (cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19))
    return 'Switch';
  else if (/^4/.test(cardNumber) && (cardNumber.length === 13 || cardNumber.length ===16 || cardNumber.length ===19))
    return 'Visa';
  else if (/^5[1-5]/.test(cardNumber) && cardNumber.length === 16)
    return 'MasterCard';
  else if (/^6011|^64[4-9]|^65/.test(cardNumber) && (cardNumber.length === 16 || cardNumber.length === 19))
    return 'Discover';
  else if (/^5018|^5020|^5038|^6304/.test(cardNumber) && (cardNumber.length >= 12 && cardNumber.length <= 19))
    return 'Maestro';
  else if (/^62212[6-9]|^6221[3-9][0-9]|^622[2-8][0-9][0-9]|^6229[0-1][0-9]|^62292[0-5]|^62[4-6]|^628[2-8]/.test(cardNumber) && (cardNumber.length >= 16 && cardNumber.length <= 19))
    return 'China UnionPay';
  else
    return null;
};


