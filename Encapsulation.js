class Student {
  constructor(name, gender, age, course, department) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.course = course;
    this.department = department;
  }

  getName() {
    return this.name;
  }
  setName(name) {
    this.name = name;
  }
  getAge() {
    return this.age;
  }
  setAge(age) {
    this.age = age;
  }
  getGender() {
    return this.gender;
  }
  setGender(gender) {
    this.gender = gender;
  }
  getCourse() {
    return this.course;
  }

  setCourse(course) {
    this.course = course;
  }
  getDepartment() {
    return this.department;
  }
  setDepartment(department) {
    this.department = department;
  }
}
let s1 = new Student("sunny", "Male", "19", "BSIT", "IT");
let s2 = new Student("pretty", "female", "23", "BSIT", "IT");
let s3 = new Student("jmxxz", "Male", "18", "BSIT", "IT");

s1.setCourse("BSCS");
console.log(s1.getCourse());
s2.setAge("19");
s2.setName("daniela");
console.log(s2.getName());

