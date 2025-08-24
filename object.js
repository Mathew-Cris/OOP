// object "bird"
const bird = {
  name: "parrot",
  color: "brown",
  size: "medium",
  // method inside the bird object
  printName: function () {
    console.log(this.name);
  },
};

// calling the method inside the bird object
bird.printName();
