// Problem 17

// If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

// If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?

// NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.

var theWordsString, theWordsStringLength;

function countingLetters(theNumber) {
  theWordsString = '';
  theWordsStringLength = 0;
  var index;
  var theNumberString = theNumber.toString();
  var theNumberLength = theNumberString.length;
  var theNumberArray = theNumberString.split('');
  let onesNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let onesWords = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  let teensWords = [
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];
  let tensWords = [
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  // four digits numbers
  if (theNumberLength == 4) {
    theWordsString = 'one' + 'thousand';
    theWordsStringLength = theWordsString.length;
  }
  //cents
  else if (theNumberLength == 3) {
    index = onesNumbers.indexOf(theNumberArray[0]);
    theWordsString = theWordsString + onesWords[index] + 'hundred';
    theWordsStringLength = theWordsString.length;
    //second cifer
    if (Number(theNumberArray[1]) > 1) {
      index = onesNumbers.indexOf(theNumberArray[1]);
      theWordsString = theWordsString + 'and' + tensWords[index - 1];
      theWordsStringLength = theWordsString.length;
      if (Number(theNumberArray[2]) > 0) {
        index = onesNumbers.indexOf(theNumberArray[2]);
        theWordsString = theWordsString + onesWords[index];
        theWordsStringLength = theWordsString.length;
      }
    }
    //10 to 19
    else if (Number(theNumberArray[1]) == 1) {
      index = onesNumbers.indexOf(theNumberArray[2]);
      theWordsString = theWordsString + 'and' + teensWords[index + 1];
      theWordsStringLength = theWordsString.length;
    }
    //ones
    else if (Number(theNumberArray[1]) == 0 && Number(theNumberArray[2]) > 0) {
      index = onesNumbers.indexOf(theNumberArray[2]);
      theWordsString = theWordsString + 'and' + onesWords[index];
      theWordsStringLength = theWordsString.length;
    }
  }

  //tens
  else if (theNumberLength == 2 && Number(theNumberArray[0]) > 1) {
    index = onesNumbers.indexOf(theNumberArray[0]);
    theWordsString = theWordsString + tensWords[index - 1];
    theWordsStringLength = theWordsString.length;
    if (Number(theNumberArray[1]) > 0) {
      index = onesNumbers.indexOf(theNumberArray[1]);
      theWordsString = theWordsString + onesWords[index];
      theWordsStringLength = theWordsString.length;
    }
  }
  //10 to 19
  else if (theNumberLength == 2 && Number(theNumberArray[0]) == 1) {
    index = onesNumbers.indexOf(theNumberArray[1]);
    theWordsString = theWordsString + teensWords[index + 1];
    theWordsStringLength = theWordsString.length;
  }

  //ones
  else if (theNumberLength == 1 && Number(theNumberArray[0]) > 0) {
    index = onesNumbers.indexOf(theNumberArray[0]);
    theWordsString = theWordsString + onesWords[index];
    theWordsStringLength = theWordsString.length;
  } else if (theNumberLength == 1 && Number(theNumberArray[0]) == 0) {
    theWordsString = theWordsString + 'zero';
    theWordsStringLength = theWordsString.length;
  }
}

function sumLetters(i, j) {
  let sumLettersTotal = 0;
  for (i; i <= j; i++) {
    countingLetters(i);
    sumLettersTotal += theWordsStringLength;
    console.log(theWordsString);
  }
}

sumLetters(1, 1000);
