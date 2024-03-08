class MasterClass {
    constructor() {
        this.name = "MasterClass";
    }
    getName() {
        return this.name;
    }
}


class Person{
    constructor(){
        this.name = "John";
        this.age = 25;
    }
    calculateAge(){
        return this.age;
    }
    Touppercase= (name) => {
        return name.toUpperCase();
    }
}

const myPerson = new Person();
console.log(myPerson.calculateAge());
console.log(myPerson.Touppercase("John"));