// Shape construction
/* kommenteerisime function Shape välja, kuna teeme eraldi konstruktori Shape jaoks
function Shape(name, sides, sideLength) {
    // all this. are attributes' fields and we have to fill them
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
    // here comes functions methods
    this.calcPerimeter = function () {
        this.perimeter = this.sides * this.sideLength;
        console.log(this.perimeter);
        // ühe reaga saaks kirjtada funktsiooni nii: console.log(this.sides * this.sideLenght, kuna mei ei ole vaja, et muutujat tagastatakse
    }
}
 */

// object creation, I create new Object Square
let square = new Square(5);
console.log(square)
// we call out object method
console.log("Ruudu ümbermõõt on: ");
square.calcPerimeter();
console.log ("Ruudu pindala on: ");
square.calcArea();


// create object triangle
let triangle = new Shape("triangle", 3, 3);
console.log(triangle)
// we call out object method
console.log("Kolmnurga ümbermõõt on: ");
triangle.calcPerimeter()