
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
}

export const decode = (encodedString) => {
  let decodedString = '';
  let a = 1;
  let b;

  for (let i = 0; i < encodedString.length; i++) {
    if (Number(encodedString[i])) {
      if (a === 1) {
        a = encodedString[i];
      } else {
        a = a + encodedString[i];
      }
    } else {
      b = encodedString[i];
      decodedString += b.repeat(a);
      a = 1;
    }
  }

  return decodedString;  
};

