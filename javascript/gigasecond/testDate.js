const testDate = new Date(2011, 0, 25);
console.log(testDate);

const calcLeapDays = () => {
  let yearRange = [];
  let leapYears = [];
  let calculatedYear = originalDate.getFullYear();

  const isLeap = (year) => {
    return (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
  }

  console.log(yearRange, originalYear, calculatedYear)

  for (let i = originalYear; i <= calculatedYear; i++) {
    yearRange = [...yearRange, i];

    if (isLeap(i)) {
      leapYears = [...leapYears, i]
    }
  }

  return days + Number(leapYears.length);

}