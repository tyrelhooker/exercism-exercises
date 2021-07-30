//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(...sides) {
    this.sides = sides;
  }

  get isEquilateral() {
    return this.sides.every((elem, i, arr) => elem === arr[0] && elem !== 0)
    
  }

  get isIsosceles() {
    throw new Error('Remove this statement and implement this function');
  }

  get isScalene() {
    throw new Error('Remove this statement and implement this function');
  }
}

// const triangle = new Triangle(0, 0, 0);
// const triangle = new Triangle(2, 2, 2);
// const triangle = new Triangle(2, 3, 4);
// console.log(triangle.isEquilateral);