export class Triangle {
  constructor(...sides) {
    this.sides = sides;
  }

  get isEquilateral() {
    return this.sides.every((elem, index, arr) => elem === arr[0] && elem !== 0)
    
  }

  get isIsosceles() {
    let [side1, side2, side3] = this.sides;

    const twoSidesEqual = this.sides.some((elem, index) => this.sides.indexOf(elem) !== index);

    if (twoSidesEqual && (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1)) {
      return true;
    }
    else {
      return false;
    }
  }

  get isScalene() {
    let [side1, side2, side3] = this.sides;

    const noSidesEqual = !this.sides.some((elem, index) => this.sides.indexOf(elem) !== index);

    if (noSidesEqual && (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1)) {
      return true;
    } 
    else {
      return false
    }
  }
}