// Variables — var, let, const

//1. Declare var, reassign it, and print the result.
var num = 10;
num = 20;

console.log(num); //20

//2. Declare var and redeclare it with a new value.
var num = 30;
var num = 50;

console.log(num); //50

//3. Declare let, reassign it, and print the result.
let num = 100;
num = 200;

console.log(num); //200

//4. Declare const to store your age and print it.
const age = 22;

console.log(age); //22

//5. Identify valid and invalid variable declarations.

// Valid declarations
var a = 10;
let b = 20;
const c = 30;

// Invalid declarations
// let b = 40;   // Error: cannot redeclare let in the same scope
// const c = 50; // Error: cannot redeclare const in the same scope
// const d;      // Error: const requires an initial value

//6. Create three variables to store your name, age, and city.
var name = "Maheshwari";
let mage = 22;
const city = "Bengaluru";

console.log(name);  //Maheshwari
console.log(mage);  //22
console.log(city);  //Bengaluru



//Printing Statements and Data Types 

//7. Use prompt() to get the user's name and display it using alert().
let name1 = prompt("Enter your name:");

alert("Welcome " + name1);      //Welcome Mahi

//8. Use prompt() to get the user's age and print it using console.log().
let age1 = prompt("Enter your age:");

console.log(age1);   //22

//9. Use confirm() to ask whether the user knows JavaScript. Print the returned value.
let answer = confirm("Do you know JavaScript?");

console.log(answer);  //OK - true Cancel - false

//10. Declare variables containing a string, number, boolean, and undefined value. Print each variable's value and type.
let name2 = "Maheshwari";
let age2 = 22;
let isLearning = true;
let result;

console.log(name2, typeof name2);     //Maheshwari  string
console.log(age2, typeof age2);       //22          number 
console.log(isLearning, typeof isLearning);   //true   boolean
console.log(result, typeof result);           //undefined  undefined

//11. Create an array containing five fruits. Print the entire array, the first element, and the last element.
let fruits = ["Apple", "Mango", "Banana", "Orange", "Grapes"];

console.log(fruits);              //["Apple", "Mango", "Banana", "Orange", "Grapes"]
console.log(fruits[0]);            //Apple
console.log(fruits[fruits.length - 1]);   //Grapes

//12. Create an object containing a fruit array, an electronic-items array, and a vegetable name. Print each property separately.
let items = {
    fruits: ["Apple", "Mango", "Banana"],
    electronics: ["Laptop", "Mobile", "Tablet"],
    vegetable: "Carrot"
};

console.log(items.fruits);                //["Apple", "Mango", "Banana"]
console.log(items.electronics);           //["Laptop", "Mobile", "Tablet"]
console.log(items.vegetable);             //Carrot





//Arithmetic Operators

//13. Declare two variables with values 15 and 4. Print addition, subtraction, multiplication, and division.
let a1 = 15;
let b1 = 4;

console.log("Addition:", a1 + b1);             //Addition: 19
console.log("Subtraction:", a1 - b1);          //Subtraction: 11
console.log("Multiplication:", a1 * b1);       //Multiplication: 60 
console.log("Division:", a1 / b1);             //Division: 3.75

//14. Find the remainder when 27 is divided by 5 using the modulus operator.
let a2 = 27;
let b2 = 5;

console.log(a2 % b2);  //2

//15. Calculate \(3^4\) using the exponentiation operator.
let res = 3 ** 4;

console.log(res);   //81

//16. Declare a variable with the value 10. Apply the pre-increment operator and print the result.
let num = 10;

console.log(++num);    //11

//17. Declare a variable with the value 10. Apply the pre-decrement operator and print the result.
let num = 10;

console.log(--num);   //9

//18.  Predict output
let x = 5;      
let y = x++;    

console.log(x);   //6
console.log(y);   //5





//Pre/Post Increment and Decrement- Predict the output:

//19. Post-increment
let p1 = 4;
console.log(p1++);    //4
console.log(p1);     //5

//Q20. Pre-increment
let p2 = 4;
console.log(++p2);        //5
console.log(p2);          //5

//Q21. Post-increment with assignment
let a3 = 8;
let b3 = a3++;

console.log(a3);     //9
console.log(b3);     //8

//Q22. Pre-increment with assignment
let a4 = 8;
let b4 = ++a4;

console.log(a4);    //9
console.log(b4);    //9

//Q23. Post-decrement with assignment
let a5 = 6;
let b5 = a5--;

console.log(a5);     //5
console.log(b5);     //6

//Q24. Pre-decrement with assignment
let a6 = 6;
let b6 = --a6;

console.log(a6);   //5
console.log(b6);   //5

//Q25. Post-increment twice
let a7 = 2;
a7++;
a7++;
console.log(a7);  //4

//Q26. Pre-decrement twice
let a8 = 10;
--a8;
--a8;
console.log(a8);   //8

//Q27.
let b7 = 3;
b7 = b7++;
console.log(b7);   //3

//Q28. Post-increment with two variables
let c1 = 4;
let d1 = c1++;

console.log("c1:", c1);       //c1:4
console.log("d1:", d1);       //d1:5

//Q29. Pre-decrement with two variables
let e = 5;
let f = --e;

console.log("e:", e);    //e:4
console.log("f:", f);    //f:4

//Q30. Predict the final values of a, b, and c
let a9 = 5;
let b9 = a9++;
let c9 = ++a9;

console.log(a9);   //7
console.log(b9);   //5
console.log(c9);   //7

