function Car(sColor, iDoors, iMpg) {
    this.color = sColor;
    this.doors = iDoors;
    this.mpg = iMpg;
    this.drivers = new Array("Mike", "Sue");
};
Car.prototype.showColor = function () {
    alert(this.color);
};

var oCar1 = new Car(red,4,23);
var oCar2 = new Car(blue,4,23);

oCar1.drivers.push("Jack");
//oCar1.showColor();
//oCar2.showColor();
alert(oCar1.drivers);
alert(oCar2.drivers);