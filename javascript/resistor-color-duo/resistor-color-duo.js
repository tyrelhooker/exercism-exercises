// export const decodedValue = ([bandColorOne, bandColorTwo]) => {
//   const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];

//   const resistanceValue = calcResistance();

//   function calcResistance() {
//     const resistanceCalc = Number(`${COLORS.indexOf(bandColorOne)}${COLORS.indexOf(bandColorTwo)}`)

//     return resistanceCalc;
//   }

//   return resistanceValue;
// }

const COLORS = ['black','brown','red','orange','yellow','green','blue','violet','grey','white'];

const decodedValue = (input) => {
  console.log(input);
  console.log(input.map((i) => {
    console.log(i);
    console.log(COLORS.indexOf(i.toLowerCase()));
    COLORS.indexOf(i)})
    .join('')) | 0;
}

decodedValue(['Orange', 'orange']);