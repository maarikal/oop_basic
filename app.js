// Shape construction
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

// object creation, I create new Object Square
let square = new Shape("square", 4, 5);
console.log(square)
// we call out object method
console.log("Ruudu pindala on: ");
square.calcPerimeter()


// create object triangle
let triangle = new Shape("triangle", 3, 3);
console.log(triangle)
// we call out object method
console.log("Kolmnurga pindala on: ");
triangle.calcPerimeter()