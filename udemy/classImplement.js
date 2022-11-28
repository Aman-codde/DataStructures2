class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  personalInfo() {
    return `${this.name} is ${this.age} years old`;
  }
}

class Student extends Human {
  constructor(name, age, course) {
    super(name, age);
    this.course = course;
  }

  courseTaken() {
    return `${this.name} is pursuing ${this.course} course`;
  }
}

const human1 = new Human("Aman", 20);
console.log(human1.personalInfo());
const student1 = new Student("Mohak", 25, "Website for Beginners");
console.log(student1.courseTaken());
console.log(student1.personalInfo());
