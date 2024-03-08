// console.log("Before Function");
// const myFunction = () => {
//   console.log("Hello from myFunction");
// };

// //this will not change on runtime

// myFunction(); // calling the function directly
// console.log("After Function");
// //we can call it using a event listener as well

const MyValue = (name) => {
  console.log(name);
};

console.log(MyValue());

const MyValue1 = (name) => {
  console.log(name);
};

const multiply = (number) => number * 2;// single line arrow function

console.log(multiply());// here comes nAN a number error which is not a number
// this is because we are not passing any value to the function

//async and await function
// calling the function directly
//this will give u an error callled undefined
