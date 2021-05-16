let carClass = class car {
    constructor(make, model, year, color) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    };

    setColor(color) {
        this.color = color;
    };
}

module.exports = carClass;