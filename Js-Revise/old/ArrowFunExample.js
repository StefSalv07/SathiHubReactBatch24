// sqaure the number p[asses in parameter]
// using arrow function

const sqaure = (x) => {
  return x * x;
};

console.log(sqaure(5));

// function greet(lname) {// taking more meormoy in fee store
//   //lname is a parameter passed to the function
//   return "hello" + lname + "!";
// }

const greet = (name) => {// optimised 
  return "hello" + name + "!";
};

console.log(greet("Dhoni"));
