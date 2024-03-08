// const numbers = [1, 2, 3, 4, 56, 78];
// const newNumbers = [...numbers, 100, 200, 300];
// console.log(newNumbers);

// const Person = {
//   ...Person,
//   name: "John",
// };

// console.log(Person);

// const filter = (...args) => {
    
// }


const groceries = ["milk", "eggs", "bread", "butter"];
groceries. forEach((item, index) => {
  console.log(item, index);
});
//perform multiple array opertaions
groceries.push("cheese");
console.log(groceries);
groceries.pop("bread");
console.log(groceries);
groceries.update("milk", "almond milk");
console.log(groceries);
groceries.clear();
console.log(groceries);
groceries.filter("milk");
console.log(groceries);
groceries.find("milk");
groceries.shift();
console.log(groceries);
groceries.unshift("milk");
console.log(groceries);
groceries.pop();
console.log(groceries);
groceries.push("butter");
console.log(groceries);
const sortedArray = groceries.sort();
console.log(sortedArray);
// // console.log("Before Function");
// // const myFunction = () => {
// //   console.log("Hello from myFunction");
// // };


