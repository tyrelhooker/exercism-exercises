//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// export 
const gigasecond = (inputDate) => {
  console.log(inputDate);
  const gigasecond = Math.pow(10, 9);
  // console.log(gigasecond);

  const convertNumberToDecimal = (num, timeUnit) => {
    const isolatedDecimal = Number(`0.${num.toString().split('.')[1].toString()}`);
    return timeUnit * isolatedDecimal
  }

  const calcFuture = (gigasecond) => {
    const totalMin = gigasecond/60;
    const totalHour = totalMin/60;
    const totalDays = totalHour/24;
    const totalYears = totalDays/365;

    const days = convertNumberToDecimal(totalYears, 365);
    // console.log('days', days);

  
    const hours = convertNumberToDecimal(days, 24);
    // console.log('hours', hours);

    const minutes = convertNumberToDecimal(hours, 60);
    // console.log('minutes', minutes);

    const seconds = convertNumberToDecimal(minutes, 60)
    // console.log('seconds', seconds.toFixed());
    // const gigaObject = 
    return {
      years: parseInt(totalYears),
      days: parseInt(days),
      hours: parseInt(hours),
      minutes: parseInt(minutes),
      seconds: parseInt(seconds)
    };
  }

  let gigaObject = calcFuture(gigasecond);

  const currentYear = inputDate.getFullYear();
  const futureYear = currentYear + gigaObject.years
  
  inputDate.setFullYear(futureYear);
  console.log(inputDate.getFullYear());

}

gigasecond(new Date(Date.UTC(2011, 3, 25)));

  