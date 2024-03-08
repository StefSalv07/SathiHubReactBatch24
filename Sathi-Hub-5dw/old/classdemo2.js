class Human {
  gender = "male";
  printGender = () => {
    console.log(this.gender);
  };
}
class Person extends Human {
  name = "";
  age = 0;
  constructor() {
    super();
    this.name = "John";
    this.age = 25;
  }
  calculateAge() {
    return this.age;
  }
  Touppercase = (name) => {
    return name.toUpperCase();
  };
}
