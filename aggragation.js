// Assignment:
/*
Create a class named Computer as your main class,
the components are: Monitor, Keyboard, mouse, cdDrive, avr.

Create a method inside the computer class named, "startup" inside the method make a statement that logs all the values of each properties.

-->Use aggregation approach!
*/

// Answer
class Computer {
  constructor(Monitor, keyboard, mouse, cdDrive, avr) {
    this.Monitor = Monitor;
    this.keyboard = keyboard;
    this.mouse = mouse;
    this.cdDrive = cdDrive;
    this.avr = avr;
  }
  startup() {
    console.log(
      `Specs | Monitor: ${this.Monitor.brand} | keyboard | ${this.mouse.brand} | cdDrive | ${this.cdDrive.brand} | AVR ${this.avr.brand}`
    );
  }
}

class Monitor {
  constructor(brand) {
    this.brand = brand;
  }
}

class Keyboard {
  constructor(brand) {
    this.brand = brand;
  }
}

class Mouse {
  constructor(brand) {
    this.brand = brand;
  }
}

class CD_DRIVE {
  constructor(brand) {
    this.brand = brand;
  }
}

class AVR {
  constructor(brand) {
    this.brand = brand;
  }
}

const monitor1 = new Monitor("LG");
const keyboard1 = new Keyboard("4tech");
const mouse1 = new Mouse("4Tech");
const cd_drive1 = new CD_DRIVE("true");
const avr1 = new AVR("Secure");

var computer = new Computer(monitor1, keyboard1, mouse1, cd_drive1, avr1);
computer.startup();
