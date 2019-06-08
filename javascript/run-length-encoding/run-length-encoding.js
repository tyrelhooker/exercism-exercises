
export const encode = (decodedString) => {
  let strChar1 = decodedString[0];
  let strChar2 = '';
  let count = 0;
  let encodedString = '';

  if (decodedString === '') {
    return decodedString;
  }

  for (let i = 0; i <= decodedString.length; i++) {
    strChar2 = decodedString[i];
    if (strChar1 === strChar2) {
      strChar1 = strChar2;
      count++; 
    } else if (strChar1 !== strChar2 && count === 1) {
      encodedString += `${strChar1}`;
      strChar1 = strChar2;
      count = 1;
    } else {
      encodedString += `${count}${strChar1}`;      
      strChar1 = strChar2;
      count = 1;
    }
  }
  
  return encodedString;
};

export const decode = (encodedString) => {
  let decodedString = '';
  let charMultiplier = 1;
  let charLetter;

  for (let i = 0; i < encodedString.length; i++) {
    if (Number(encodedString[i])) {
      if (charMultiplier === 1) {
        charMultiplier = encodedString[i];
      } else {
        charMultiplier = charMultiplier + encodedString[i];
      }
    } else {
      charLetter = encodedString[i];
      decodedString += charLetter.repeat(charMultiplier);
      charMultiplier = 1;
    }
  }

  return decodedString;  
};

