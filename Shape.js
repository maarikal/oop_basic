class Shape {
    // making construction
    constructor(name, sides, sideLength) {
        // all this. are attributes' fields and we have to fill them
        this.name = name;
        this.sides = sides;
        this.sideLength = sideLength;
    }
    // making method (lühem kajastusviis, vt pikemat app.js faili väljakommenteeritud osast)
        calcPerimeter() {
            this.perimeter = this.sides * this.sideLength;
            console.log(this.perimeter);
    }
}