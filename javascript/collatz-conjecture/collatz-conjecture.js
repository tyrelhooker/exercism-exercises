//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (number) => {
  if (number <= 0) {
    throw 'Only positive numbers are allowed';
  }

  const handleSequence = (number, count=0) => {
    if (number === 1) {
      return count
    } else if (number%2 === 0) {
      number = number/2;
      count += 1;
      return handleSequence(number, count);
    } else {
      number = number*3 + 1;
      count += 1;
      return handleSequence(number, count);
    }
  }

  return handleSequence(number);
};