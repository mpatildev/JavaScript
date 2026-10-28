//-------------- Array Higher-Order Methods------------------------------

//1. Create an array of 10 numbers and use forEach() to print each number.
let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

numbers.forEach((num) => {
    console.log(num);
});                   //10 20 30 40 50 60 70 80 90 100


// 2. Create an array of numbers and use map() to create a new array where every number is multiplied by 5.
let numbers1 = [2, 4, 6, 8, 10];

let result = numbers1.map((num) => num * 5);

console.log(result);       //10 20 30 40 50


//3. Given an array of numbers, use filter() to get only numbers greater than 20.
let numbers3 = [10, 25, 15, 30, 40, 5, 50];

let result1 = numbers3.filter((num) => num > 20);

console.log(result1);     //[25,30, 40, 50]


//4. Create an employee array containing name and salary. Use filter() to display employees whose salary is less than or equal to ₹300,000.
let employees = [
    { name: "Mahesh", salary: 250000 },
    { name: "Ani", salary: 400000 },
    { name: "Mani", salary: 300000 },
    { name: "Mahi", salary: 200000 }
];

let result2 = employees.filter((emp) => emp.salary <= 300000);

console.log(result2);      //[{ name: "Mahesh", salary: 250000 },  { name: "Mani", salary: 300000 }, { name: "Mahi", salary: 200000 }]


//5. Using the same employee array, use find() to get the first employee whose salary is greater than ₹200,000.
let employees1 = [
    { name: "Mahesh", salary: 250000 },
    { name: "Ani", salary: 400000 },
    { name: "Mani", salary: 300000 },
    { name: "Mahi", salary: 200000 }
];
let result3 = employees.find((emp) => emp.salary > 200000);

console.log(result3);          //{ name: "Mahesh", salary: 250000 }


//6. Use reduce() to calculate the total of all numbers in an array.
let numbers4 = [10, 20, 30, 40, 50];

let total = numbers4.reduce((sum, num) => sum + num, 0);

console.log(total); //150


//7. Create an array of numbers and use some() to check whether at least one number is even.
let numbers5 = [1, 3, 5, 8, 9];

let result4 = numbers5.some((num) => num % 2 === 0);

console.log(result4);     //true

//8. Use every() to check whether all numbers in an array are greater than zero.
let numbers6 = [10, 20, 30, 40, 50];

let result5 = numbers6.every((num) => num > 0);

console.log(result5);    //true

//9. Given an array of numbers, sort them in ascending order using the sort callback.
let numbers7 = [50, 10, 40, 20, 30];

numbers7.sort((a, b) => a - b);

console.log(numbers7);       //[10, 20, 30, 40, 50]


//10. Given an array of numbers, sort them in descending order using sort() and (a, b) => b - a.

let numbers8 = [50, 10, 40, 20, 30];

numbers8.sort((a, b) => b - a);

console.log(numbers8);              //[50, 40, 30, 20, 10]





//-----------------String Methods----------------------------


//11. Create a string "javascript" and print the character at index 4 using charAt().
let str = "javascript";

console.log(str.charAt(4)); //s


// 12. Find the character code at index 2 using charCodeAt().
let str1 = "javascript";

console.log(str1.charCodeAt(2)); //118


// 13. Create a string with spaces at the beginning and end. Remove the extra spaces using trim().
let str2 = "   Hello JavaScript   ";

console.log(str2.trim());   //Hello JavaScript


// 14. Convert a string to uppercase and lowercase using the appropriate methods.
let str3 = "JavaScript";

console.log(str.toUpperCase());    //JAVASCRIPT
console.log(str.toLowerCase());    //javascript


// 15. Check whether a string contains "script" using includes().
let str4 = "javascript";

console.log(str4.includes("script"));     //true


// 16. Check whether a string starts with "Java" and ends with "Script" using the appropriate methods.
let str5 = "JavaScript";

console.log(str5.startsWith("Java"));    //true
console.log(str5.endsWith("Script"));    //true


// 17. Replace every occurrence of "java" with "python" in a string using replaceAll().
let str6 = "javaScript is easy and javaScript is popular";

let result6 = str.replaceAll("javaScript", "python");

console.log(result6);       //python is easy and python is popular


// 18. Split the string "html-css-javascript-react" into an array using split().
let str7 = "html-css-javascript-react";

let result7 = str.split("-");

console.log(result7);    //["html", "css", "javascript", "react"]


// 19. Convert an array of names into a single string using join() with a comma separator.
let names = ["Rahul", "Priya", "Amit", "Sneha"];

let res = names.join(",");    

console.log(res);       //Rahul,Priya,Amit,Sneha


// 20. Create a string and extract a portion of it using slice().
let str8= "JavaScript";

let result8 = str.slice(0, 4);

console.log(result8);        //Java





//-------------------Date Methods----------------------------

// 21. Create a Date object and print the current year, month, date, and day.
let today = new Date();

console.log("Year:", today.getFullYear());                //Year: 2026
console.log("Month:", today.getMonth() + 1);              //Month: 10
console.log("Date:", today.getDate());                   //Date: 28
console.log("Day:", today.getDay());                     //Day: 3

// 22. Create an array containing all 12 month names. Use getMonth() to display the current month name.
let months = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
];

let today1 = new Date();

console.log(months[today1.getMonth()]);  //October

// 23. Print the current hours, minutes, and seconds using the appropriate date methods.
let today2 = new Date();

console.log("Hours:", today2.getHours());             //Hours: 14
console.log("Minutes:", today2.getMinutes());         //Minutes: 4
console.log("Seconds:", today2.getSeconds());         //Seconds: 52

// 24. Create a date object and change its year to 2003, month to January, and date to 30 using the setter methods.
let today3 = new Date();

today3.setFullYear(2003);
today3.setMonth(0);
today3.setDate(30);

console.log(today3);               //Thu Jan 30 2003 14:05:23





//-------------------------Asynchronous JavaScript-------------------------------

// 25. Use setTimeout() to print "Welcome to JavaScript" after 3 seconds.
setTimeout(() => {
    console.log("Welcome to JavaScript");
}, 3000);    
                        //Welcome to JavaScript


// 26. Use setInterval() to print "Learning JavaScript" every 2 seconds.
// setInterval(() => {
//     console.log("Learning JavaScript");
// }, 2000);                  //Learning JavaScript
                           // Learning JavaScript
                           // Learning JavaScript
                           // Learning JavaScript
                           // ...


// 27. Stop the interval created in Task 26 after 8 seconds using clearInterval().
let timer = setInterval(() => {
    console.log("Learning JavaScript");
}, 2000);

setTimeout(() => {
    clearInterval(timer);
    console.log("Interval stopped");
}, 8000);                           

// 28. Create three functions named one(), two(), and three(). Call them in this order: one(), setTimeout(two, 0), and three(). Observe the output order.
function one() {
    console.log("One");
}

function two() {
    console.log("Two");
}

function three() {
    console.log("Three");
}

one();                             //One
setTimeout(two, 0);                //Three 
three();                           //Two         //Schedules two() to run later.  
                                  





//------------------------ Promises and API -----------------------------


// 29. Create a Promise that resolves with the message "Login successful" and display the result using .then().
let login = new Promise((resolve, reject) => {
    resolve("Login successful");
});

login.then((message) => {
    console.log(message);
});


// 30. Create a Promise that rejects with the message "Invalid password" and handle the error using .catch().
let login1 = new Promise((resolve, reject) => {
    reject("Invalid password");
});

login1.catch((error) => {
    console.log(error);
});


// 31. Create a Promise and use .finally() to print "Process completed" regardless of whether it resolves or rejects.
let process = new Promise((resolve, reject) => {
    resolve("Login successful");
});

process
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Process completed");
    });                                         //Login successful
                                                //Process completed


// 32. Fetch product data from the Fake Store API:  https://fakestoreapi.com/products

fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((products) => {
        products.forEach((product) => {
            console.log(product);
        });
    });


// Convert the response to JSON and print all product titles using forEach().
fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((products) => {
        products.forEach((product) => {
            console.log(product.title);
        });
    });


// 33. Fetch the same API and print the title, price, and category of every product.
fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((products) => {
        products.forEach((product) => {
            console.log("Title:", product.title);
            console.log("Price:", product.price);
            console.log("Category:", product.category);
            console.log("--------------------");
        });
    });


// 34. Handle API errors using .catch() and display the error message using console.warn().

fetch("https://fakestoreapi.com/product")
    .then((response) => response.json())
    .then((products) => {
        console.log(products);
    })
    .catch((error) => {
        console.warn("Error:", error.message);
    });



// 35. Use .finally() to print "API call completed" after the fetch process.
fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((products) => {
        console.log(products);
    })
    .catch((error) => {
        console.warn("Error:", error.message);
    })
    .finally(() => {
        console.log("API call completed");
    });





//----------------------------------Real-Time Mini Tasks-----------------------------------

// 36. Employee salary report: Create an array of employee objects. Use filter() to select employees earning less than ₹300,000, then use forEach() to print their names and salaries.
console.log("========== Q36 ==========");
let employees36 = [
    { name: "Rahul", salary: 250000 },
    { name: "Priya", salary: 350000 },
    { name: "Amit", salary: 280000 },
    { name: "Sneha", salary: 400000 },
    { name: "Kiran", salary: 200000 }
];

let result36 = employees36.filter((emp) => emp.salary < 300000);

result36.forEach((emp) => {
    console.log(`Name: ${emp.name}, Salary: ${emp.salary}`);
});                                  //   Name: Rahul Salary: 250000
                                     //   Name: Amit Salary: 280000
                                     //   Name: Kiran Salary: 200000





// 37. Product price calculator: Fetch products from the Fake Store API and use map() to create a new array containing only product titles and prices.
fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((products) => {
        let prodresult = products.map((product) => ({
            title: product.title,
            price: product.price
        }));

        console.log(prodresult);
    })
    .catch((error) => {
        console.warn("Error:", error.message);
    });


// 38. Product search: Fetch products and use filter() to display products belonging to a category you choose.
fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((products) => {
        let prodresults = products.filter(
            (product) => product.category === "jewelery"
        );

        console.log(prodresults);
    })
    .catch((error) => {
        console.warn("Error:", error.message);
    });


// 39. Number analysis: Given an array of numbers, use map(), filter(), reduce(), some(), and every() to perform different calculations and checks.
console.log("========== Q39 ==========");
let numbers39 = [10, 20, 30, 40, 50];

let doubled39 = numbers39.map((n) => n * 2);
console.log("Doubled:", doubled39);                          //Doubled: [20, 40, 60, 80, 100]

let filtered39 = numbers39.filter((n) => n > 25);
console.log("Numbers greater than 25:", filtered39);        //Numbers greater than 25: [30, 40, 50]

let total39 = numbers39.reduce((s, n) => s + n, 0);
console.log("Total:", total39);                            //Total: 150

let hasLargeNumber39 = numbers39.some((n) => n > 45);
console.log("Any number greater than 45:", hasLargeNumber39);           //Any number greater than 45: true

let allGreater39 = numbers39.every((n) => n > 5);
console.log("All numbers greater than 5:", allGreater39);               //All numbers greater than 5: true                          



// 40. Product listing: Fetch the Fake Store API data, convert the response to JSON, and print the title, price, and category of each product. Handle errors with .catch() and print a completion message with .finally().
fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((products) => {
        products.forEach((product) => {
            console.log("Title:", product.title);
            console.log("Price:", product.price);
            console.log("Category:", product.category);
            console.log("--------------------");
        });
    })
    .catch((error) => {
        console.warn("Error:", error.message);
    })
    .finally(() => {
        console.log("API call completed");
    });































    
