//Functions and Parameters

//1. Create a function welcome()
function welcome() {
    console.log("Welcome to JavaScript");
}

welcome();      //Welcome to JavaScript

//2. Create a function studentDetails(name, age, cgpa)
function studentDetails(name, age, cgpa) {
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("CGPA:", cgpa);
}

studentDetails("Priya", 21, 9.0);       //Name: Priya Age: 21 CGPA: 9.0
studentDetails("Rahul", 22, 8.5);       //Name: Rahul Age: 22 CGPA: 8.5

//3. Create a function calculateFee(fee) that returns the fee
function calculateFee(fee) {
    return fee;
}

let studentFee = calculateFee(50000);

console.log("Student Fee:", studentFee);        //Student Fee: 500000

//4. Create a function discount(percent)
function discount(percent) {
    let fee = 200000;
    let discountAmount = fee * percent / 100;
    let finalFee = fee - discountAmount;

    console.log("Original Fee: ₹" + fee);
    console.log("Discount: ₹" + discountAmount);
    console.log("Final Fee: ₹" + finalFee);
}

discount(10);             //Original Fee: ₹200000
                          //Discount: ₹20000
                          //Final Fee: ₹180000

//5. Create a function studentForm(name, age, disability = "no")
function studentForm(name, age, disability = "no") {
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Disability:", disability);
    console.log("----------------");
}

studentForm("Priya", 21, "yes");          // Name: Priya   Age: 21  Disability: yes
studentForm("Rahul", 22, "no");           // Name: Rahul   Age: 22  Disability: no
studentForm("Sneha", 20);                 // Name: Sneha   Age: 20  Disability: no




//Function Types and Scope

//6. Create a named function that accepts a message and prints it.
function displayMessage(message) {
    console.log(message);
}

displayMessage("Hello, JavaScript!");    //Hello, JavaScript!

//7. Create an anonymous function and store it in a variable.
let printName = function(name) {
    console.log(name);
};

printName("Maheshwari");  //Maheshwari

//8. Create an arrow function that accepts a number and prints it.
let printNumber = (num) => {
    console.log(num);
};

printNumber(25);    //25

//9. Check var, let, and const inside and outside an if block.
function checkScope() {
    if (true) {
        var a = 10;
        let b = 20;
        const c = 30;

        console.log("Inside block:");
        console.log(a);
        console.log(b);
        console.log(c);
    }

    console.log("Outside block:");
    console.log(a);
    // console.log(b); // ReferenceError
    // console.log(c); // ReferenceError
}

checkScope();     //Inside block:
                  // 10
                  // 20
                  // 30
                  //Outside block:
                  // 10

//10. Predict the output
console.log(value);
var value = 10;       //undefined---because of hoisting





// Callback and Higher-Order Functions

//11. Create first() and second(). Pass second as a callback to first()
function second() {
    console.log("This is the second function");
}

function first(callback) {
    console.log("This is the first function");
    callback();
}

first(second);       //This is the first function
                     //This is the second function


//12. Create an add(callback, a, b) function.
function add(callback, a, b) {
    console.log("Sum:", a + b);
    callback(a, b);
}

function result(a, b) {
    console.log("Callback executed");
}

add(result, 10, 5);           //Sum: 15
                              //Callback executed 


//13. Create a sub(num1, num2) arrow function and pass it as a callback to add().
function addition(callback, a, b) {
    console.log("Sum:", a + b);    
    callback(a, b);             
}

let Substraction = (num1, num2) => {
    console.log("Subtraction:", num1 - num2);
};

addition(Substraction, 10, 5);               //Sum:15
                                            //Substraction: 5


//14. Create a multiply(callback, a, b) function.
function multiply(callback, a, b) {
    console.log("Multiplication:", a * b);
    callback();
}

function message() {
    console.log("Callback executed successfully");
}

multiply(message, 4, 5);              //Multiplication: 20
                                      //Callback executed successfully


// 15. Create a divide(num1, num2) function and pass it as a callback.
function divide(num1, num2) {
    console.log("Division:", num1 / num2);
}

function calculate(callback, a, b) {
    callback(a, b);
}

calculate(divide, 20, 4);         //Division: 5


//16. Create a higher-order function that accepts a callback and calls it with a student's name.
function studDetails(callback) {
    callback("Maheshwari");
}

function showName(name) {
    console.log("Student Name:", name);
}

studDetails(showName);        //Student Name: Maheshwari





// Generator Functions

//17. Create a generator function that yields three cashback messages.
function* cashback() {
    yield "10% cashback";
    yield "30% cashback";
    yield "Better luck next time";
}

let res = cashback();

console.log(res.next().value);         //10% cashback
console.log(res.next().value);         //30% cashback
console.log(res.next().value);         //Better luck next time


//18. Call .next() three times on a generator object.
function* numbers() {
    yield 10;
    yield 20;
    yield 30;
}

let gen = numbers();

console.log(gen.next());            //{ value: 10, done: false }                             
console.log(gen.next());            //{ value: 10, done: false }  
console.log(gen.next());            //{ value: 10, done: false }  


//19. Create a generator function that yields five discount messages. Print them using for...of
function* discounts() {
    yield "5% discount";
    yield "10% discount";
    yield "15% discount";
    yield "20% discount";
    yield "No discount";
}

for (let message of discounts()) {
    console.log(message);
}                             //5% discount
                              //10% discount
                              //15% discount
                              //20% discount
                              //No discount


//20. Create a generator function that yields three student names.
function* students() {
    yield "Priya";
    yield "Rahul";
    yield "Maheshwari";
}

for (let name of students()) {
    console.log(name);
}                        //Priya
                         //Rahul
                         //Maheshwari


//21. Create a generator function with four yield statements. Check the done property.
function* myGenerator() {
    yield 10;
    yield 20;
    yield 30;
    yield 40;
}

let gen1 = myGenerator();

console.log(gen1.next());             //{ value: 10, done: false }
console.log(gen1.next());             //{ value: 20, done: false }
console.log(gen1.next());             //{ value: 30, done: false }
console.log(gen1.next());             //{ value: 40, done: false }
console.log(gen1.next());             //{ value: undefined, done: true }






//Currying and Uncurrying 

//22. Create a normal function add(a, b, c) that prints the sum of three numbers.
function add2(a, b, c) {
    console.log("Sum:", a + b + c);
}

add2(5, 10, 15);           //Sum: 30


//23. Convert the add(a, b, c) function into a curried function using nested functions.
function add3(a) {
    return function(b) {
        return function(c) {
            console.log("Sum:", a + b + c);
        };
    };
}

add3(5)(10)(15);                //Sum: 30


//24. Call a curried function with values 5, 10, and 15 using this format: functionName(5)(10)(15).
function calculate(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}

console.log(calculate(5)(10)(15));    //30


//25. Create a curried function for product price, discount percentage, and quantity.
function totalPrice(price) {
    return function(discount) {
        return function(quantity) {
            let discountedPrice = price - (price * discount / 100);
            return discountedPrice * quantity;
        };
    };
}

console.log("Total Price: ₹" + totalPrice(1000)(10)(3));          //Total Price: ₹2700

//26. Write a normal three-parameter function and its curried equivalent. Compare their results.

// Normal function
function add4(a, b, c) {
    return a + b + c;
}

// Curried function
function curriedAdd(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}

let normalResult = add4(5, 10, 15);
let curriedResult = curriedAdd(5)(10)(15);

console.log("Normal Result:", normalResult);                    //Normal Result: 30
console.log("Curried Result:", curriedResult);                  //Curried Result: 30
console.log("Are results equal:", normalResult === curriedResult);    //Are results equal: true





//IIFE, Return, and Mixed Practice

// 27. Create an IIFE that accepts a product name and discount percentage.
(function(productName, discount) {
    console.log(`${productName} is available at ${discount}% discount!`);
})("Laptop", 20);                            //Laptop is available at 20% discount


//28. Create a function that returns a number. Store and print the returned value.
function getNumber() {
    return 100;
}

let result1 = getNumber();

console.log(result1);     //100


//29. Create a function that accepts a student's marks and returns them.
function getMarks(marks) {
    return marks;
}

let studentMarks = getMarks(85);

console.log("Student Marks:", studentMarks);      //Student Marks: 85


//30. Create a student fee calculator using a default parameter, callback, and return value.
function calcFee(fee = 200000, callback) {
    let discount = callback(fee);
    let finalFee = fee - discount;

    return finalFee;
}

function calcDiscount(fee) {
    return fee * 10 / 100;
}

let result2 = calcFee(200000, calcDiscount);

console.log("Final Student Fee: ₹" + result2);     //Final Student Fee: ₹180000


