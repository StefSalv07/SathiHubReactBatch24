// 4. Practical Question: Create a function named calculate that takes two
// numbers and a callback function as parameters. The callback function should
// perform a specific mathematical operation (e.g., addition or subtraction).

// function Calculate(no1, no2) {
//   // no1-> arg no2-> arg but operation is a callback function
//   let sum = no1 + no2;
//   console.log("the Sum is     : " + sum);
//   return 0;
// }


// 2. function declaration
// int funNamae(int m , int j){
//   return m+j;//perfom the specific task
// }
// 3. function calling
// funNamae(12,34)/
// Calculate(100,10)
// recursion 

function calculate(no1, no2, working) {
  // return no1+no2;
  return working(no1, no2);// working is a callback function // and works recursively 
}

function addition(a,b)
{
  return a+b;
}// a,b dies
function subtraction(a,b)
{
  return a-b;
}// a,b dies
function mult (a,b)
{
  return a*b;
}// a,b dies
function div (a,b)
{
  return a/b;
}// a,b dies

let resultAdd = calculate(10,20,addition);
let resultSub = calculate(10,20,subtraction);
let resultMult = calculate(10,20,mult);
let resultDiv = calculate(10,20,div);

console.log('The add is => ',resultAdd)
console.log('The sub is => ',resultSub)
console.log('The mult is => ',resultMult)
console.log('The div is => ',resultDiv)

//  addition()-> calling
// fun(addition)  called as passing a funtion as args to another function