//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const calcFractionalTimeUnit = (timeUnit, conversionRatio) => {
  const fractionalTimeUnit = Number(`0.${timeUnit.toString().split('.')[1].toString()}`);

  return conversionRatio * fractionalTimeUnit
}

const calcElapsedTimeUnits = (gigasecond) => {
  const [sec, min, hr] = [60, 60, 24];
  const days = gigasecond/sec/min/hr;
  const hours = calcFractionalTimeUnit(days, hr);
  const minutes = calcFractionalTimeUnit(hours, min);
  const seconds = calcFractionalTimeUnit(minutes, sec)
  
  return {
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: Math.round(seconds)
  };
}

export const gigasecond = (inputDate) => {
  const futureDate = new Date(inputDate);
  const gigasecond = Math.pow(10, 9);

  const { days, hours, minutes, seconds } = calcElapsedTimeUnits(gigasecond);

  futureDate.setUTCDate(futureDate.getUTCDate() + days);
  futureDate.setUTCHours(futureDate.getUTCHours() + hours)
  futureDate.setUTCMinutes(futureDate.getUTCMinutes() + minutes)
  futureDate.setUTCSeconds(futureDate.getUTCSeconds() + seconds);

  return futureDate;
}