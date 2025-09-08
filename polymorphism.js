// Parent class
class Animal {
  speak() {
    console.log("The animal makes a sound.");
  }
}

// Child class Dog
class Dog extends Animal {
  speak() {
    console.log("The dog barks.");
  }
}

// Child class Cat
class Cat extends Animal {
  speak() {
    console.log("The cat meows.");
  }
}

// Using polymorphism
let animals = [new Animal(), new Dog(), new Cat()];

animals.forEach(animal => {
  animal.speak(); // Same method name, but different behavior
});
