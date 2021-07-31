export class Triangle {
  constructor(...sides) {
    this.sides = sides.sort((a, b) => a - b);
  }

  checkForTriangleInequality() {
    let [side1, side2, side3] = this.sides;

    if (side1 + side2 > side3) {
      return true;
    } else {
      return false;
    }
  }

  checkSideEquality() {
    return this.sides.some((elem, index) => this.sides.indexOf(elem) !== index);
  }

  get isEquilateral() {
    return this.sides.every((elem, index, arr) => elem === arr[0] && elem !== 0)
  }

  get isIsosceles() {
    if (this.checkSideEquality() && this.checkForTriangleInequality()) {
      return true;
    } else {
      return false;
    }
  }

  get isScalene() {
    if (!this.checkSideEquality() && this.checkForTriangleInequality()) {
      return true;
    } else {
      return false
    }
  }
}