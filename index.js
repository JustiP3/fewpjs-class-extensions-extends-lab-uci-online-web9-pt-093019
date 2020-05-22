class Polygon {
    constructor(sideLengths) {
        this.sideLengths = sideLengths
    }

    get countSides() {
        console.log(this.sideLengths)
        return this.sideLengths.length 
    }

    get perimeter() {
        return this.sideLengths.reduce((x, y) => x + y)
    }
}

class Triangle extends Polygon {
    get isValid() {
        const newArray = this.sideLengths.sort((x,y) => x - y)
        if (newArray[2] >= newArray[1] + newArray[0]) {
            return false 
        } else {
            return true 
        }
    }
}

class Square extends Polygon {
    get isValid() {
        const sideLength = this.sideLengths[0]

        const notEqualSide = this.sideLengths.find((side) => side != sideLength)

        if (!!notEqualSide) {
            return false 
        } else {
            return true 
        }        
    }

    get area() {
        return this.sideLengths[0] ** 2
    }
}