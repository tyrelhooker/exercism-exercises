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
  
}
