// Main class
class Transportation {
  constructor(name, speed, size, kind) {
    this.name = name;
    this.speed = speed;
    this.size = size;
    this.kind = kind;
  }
  // method inside the class
  run() {
    console.log("The " + this.name + " is running");
  }
}

// instantiation
const car = new Transportation("Lamborghini", "150", "14", "sports car");
console.log(car.speed);
console.log(car.size);
console.log(car.name);

// calling the method "run" in our Main class
car.run();
