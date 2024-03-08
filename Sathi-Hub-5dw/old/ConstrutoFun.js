function person(lname, age) {
  this.lname = lname;
  this.age = age;

  this.introduce = function () {
    return (
      "Hii My Name is " + this.lname + " and I am " + this.age + " years old"
    );
  };
}
//constor fun

const person1 = new person("khan", 55);
console.log(person1.introduce());
//dom in js
// react js + node + mongo db + express
