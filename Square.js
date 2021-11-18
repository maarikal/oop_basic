class Square extends Shape {
    // have to be constructor
    constructor(sideLength) {
        super("square", 4, sideLength);
    }
    // method
    calcArea() {
        this.area = Math.pow(this.sideLength, 2);
        console.log("Pindala on " + this.area)
    }
}