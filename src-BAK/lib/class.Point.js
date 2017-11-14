export class Point {
    constructor() {
        this.x = 0;
        this.y = 0;
    }
    create(x, y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }
}
export class ColorPoint extends Point {
    constructor() {
        super();
        this.color = "red";
    }
    create(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
    }
    toString() {
        return super.toString() + ' in ' + this.color;
    }
}