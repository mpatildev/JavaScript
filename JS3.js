// Variables and Data Types

//Q1. Declare variables using var, let, and const. Reassign and redeclare wherever allowed, then print the results.
// Using var
var a = 10;
var a = 20;  // Redeclaration allowed
a = 30;       // Reassignment allowed
console.log(a);

// Using let
let b = 40;
b = 50;       // Reassignment allowed
// let b = 60; // Redeclaration not allowed in the same scope
console.log(b);

// Using const
const c = 70;
// c = 80;     // Reassignment not allowed
// const c = 90; // Redeclaration not allowed in the same scope
console.log(c);

//Q2. Create variables for your name, age, and programming knowledge. Print each variable and its data type using typeof.
let name = "Maheshwari";
let age = 22;
let programmingKnowledge = true;

console.log(name, typeof name);    //Maheshwari string
console.log(age, typeof age);      //22  number
console.log(programmingKnowledge, typeof programmingKnowledge);   //true  boolean

//Q3. Create an array of 5 fruits. Print the complete array, the first element, and the last element.
let fruits = ["Apple", "Mango", "Banana", "Orange", "Grapes"];

console.log(fruits);        //['Apple', 'Mango', 'Banana', 'Orange', 'Grapes']
console.log(fruits[0]);     //Apple
console.log(fruits[fruits.length - 1]);  //Grapes

//Q4. Create an object containing your name, role, and CGPA. Print each property separately.
let student = {
    name: "Maheshwari",
    role: "Recent Graduate",
    cgpa: 8.5
};

console.log(student.name);   //Maheshwari
console.log(student.role);   //Recent Graduate
console.log(student.cgpa);   //8.5

//Q5. Take the user's name and age using prompt(). Display the name using alert() and print the age in the console.
let userName = prompt("Enter your name:");
let userAge = prompt("Enter your age:");

alert("Welcome " + userName);     //Welcome Mahi

console.log("Age:", userAge);    //Age: 22



//Operators

//Q6. Perform arithmetic operations on two numbers.
let a1 = 15;
let b1 = 4;

console.log("Addition:", a1 + b1);      //Addition: 19 
console.log("Subtraction:", a1 - b1);   //Substraction: 11
console.log("Multiplication:", a1 * b1);  //Multiplication: 60
console.log("Division:", a1 / b1);        //Division: 3.75
console.log("Modulus:", a1 % b1);          //Modulus: 3
console.log("Exponentiation:", a1 ** b1);   //Exponentiation: 50625

//Q7. Predict the output.
let a2 = 5;
console.log(a2++);  //5
console.log(a2);    //6
console.log(++a2);   //7

//Q8. Predict the output.
let a3 = 10;
let b3 = a3--;
let c3 = --a3;

console.log(a3);   //8
console.log(b3);   //10
console.log(c3);   //8

//Q9. Use assignment operators and print the value after each operation.
let a4 = 20;

a4 += 10;
console.log("After +=:", a4);    //30

a4 -= 5;
console.log("After -=:", a4);   //25

a4 *= 2;
console.log("After *=:", a4);    //50

a4 /= 5;
console.log("After /=:", a4);   //10

a4 %= 6;
console.log("After %=:", a4);    //4

//Q10. Predict the comparison results.
console.log(5 == "5");        //true
console.log(5 === "5");        //false
console.log(10 != "10");       //false
console.log(10 !== "10");      //true

//Q11. Use &&, ||, and ! to check conditions.
let age1 = 22;
let hasID = true;

console.log(age1 >= 18 && hasID);   //true
console.log(age1 < 18 || hasID);    //true
console.log(!hasID);               //false

//Q12. Use the ternary operator to check whether the user is 18 or above.
let age2 = Number(prompt("Enter your age:"));

let message = age2 >= 18
    ? "You are eligible."
    : "You are not eligible.";

console.log(message);    //true-You are eligible false-You are not eligible  



//Type Casting and Conditions

//Q13. Predict the data types.
console.log(typeof ("hello" + 10));    //string
console.log(typeof (10 + true));       //number
console.log(typeof (10 + null));       //number
console.log(typeof ("hello" + undefined));   //string

//Q14. Convert a value from prompt() into a number, add 10, and print it.
let num1 = Number(prompt("Enter a number:"));

let result = num1 + 10;

console.log("Result:", result);   //Result: 35

//Q15. Use Boolean() to check different values.
console.log(Boolean(""));           //false
console.log(Boolean("Hello"));      //true
console.log(Boolean(0));            //false
console.log(Boolean(true));         //true

//Q16. Check whether a number is positive or not using if-else.
let num2 = Number(prompt("Enter a number:"));

if (num2 > 0) {
    console.log("The number is positive.");
} else {
    console.log("The number is not positive.");
}

//Q17. Display a message based on the time entered by the user.
let time = Number(prompt("Enter the hour (0-23):"));

if (time < 0 || time > 23 || !Number.isInteger(time)) {
    console.log("Invalid time.");
} else if (time >= 4 && time < 6) {
    console.log("Early morning");
} else if (time >= 6 && time < 12) {
    console.log("Morning");
} else if (time >= 12 && time < 17) {
    console.log("Afternoon");
} else if (time >= 17 && time < 20) {
    console.log("Evening");
} else {
    console.log("Night");
}

//Q18. Create a nested if statement to check age, height, and weight.
let age3 = Number(prompt("Enter your age:"));
let height = Number(prompt("Enter your height in cm:"));
let weight = Number(prompt("Enter your weight in kg:"));

if (age3 >= 18) {
    if (height >= 160) {
        if (weight >= 50) {
            console.log("You are eligible.");
        } else {
            console.log("You do not meet the weight requirement.");
        }
    } else {
        console.log("You do not meet the height requirement.");
    }
} else {
    console.log("You do not meet the age requirement.");
}


//Switch and Loops

//Q19. Use switch to display a message based on a traffic light color.
let color = prompt("Enter traffic light color:");

switch (color.toLowerCase()) {
    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Get ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid color");
} 

//Q20. Use a for loop to print numbers from 1 to 20.
for (let i = 1; i <= 20; i++) {
    console.log(i);
}

//Q21. Use a for loop to print all even numbers from 2 to 20.
for (let j = 2; j <= 20; j += 2) {
    console.log(j);
}

//Q22. Use a while loop to print numbers from 10 down to 1.
let i1 = 10;

while (i1 >= 1) {
    console.log(i1);
    i1--;
}

//Q23. Use a do-while loop to print numbers from 1 to 10.
let i2 = 1;

do {
    console.log(i2);
    i2++;
} while (i2 <= 10);

//Q24. Use a for-of loop to print each character in "JavaScript".
let str = "JavaScript";

for (let char of str) {
    console.log(char);
}                            //output     J
                             //           a
                             //           v
                             //           a
                             //           S
                             //           c
                             //           r
                             //           i
                             //           p
                             //           t

//Q25. Use a for-of loop to print every element in an array of 5 student names.
let students = ["Priya", "Rahul", "Anu", "Kiran", "Sneha"];

for (let name of students) {
    console.log(name);
}                            //output     Priya
                             //           Rahul
                             //           Anu
                             //           Kiran
                             //           Sneha

//Q26. Use a for-in loop to print all keys and values of the student object.
let student1 = {
    name: "Priya",
    role: "Frontend Developer",
    cgpa: 9
};

for (let key in student1) {
    console.log(key, ":", student1[key]);
}                                          //output  name : Priya
                                           //        role : Frontend Developer
                                           //        cgpa : 9

      

//Mixed Practice

//Q27. Take two numbers using prompt() and display their sum, difference, product, and remainder.
let a5 = Number(prompt("Enter the first number:"));
let b5 = Number(prompt("Enter the second number:"));

console.log("Sum:", a5 + b5);                  
console.log("Difference:", a5 - b5);      
console.log("Product:", a5 * b5);
console.log("Remainder:", a5 % b5);

//Q28. Create an array of 5 numbers and use a loop to print only numbers greater than 10.
let numbers = [5, 12, 8, 20, 15];

for (let num of numbers) {
    if (num > 10) {
        console.log(num);
    }
}                             //output 12 20 15

//Q29. Take the user's age using prompt(). Check eligibility and display the result using alert().
let age4 = Number(prompt("Enter your age:"));

if (age4 >= 18) {
    alert("You are eligible.");
} else {
    alert("You are not eligible.");
}

//Q30. Create a simple calculator menu using switch.
let choice = Number(prompt(
    "Choose an operation:\n1. Addition\n2. Subtraction\n3. Multiplication\n4. Division"
));

let a6 = Number(prompt("Enter the first number:"));
let b6 = Number(prompt("Enter the second number:"));

switch (choice) {
    case 1:
        alert("Result: " + (a6 + b6));
        break;

    case 2:
        alert("Result: " + (a6 - b6));
        break;

    case 3:
        alert("Result: " + (a6 * b6));
        break;

    case 4:
        if (b6 !== 0) {
            alert("Result: " + (a6 / b6));
        } else {
            alert("Cannot divide by zero.");
        }
        break;

    default:
        alert("Invalid choice.");
}