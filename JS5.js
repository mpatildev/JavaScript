// Array Manipulation Methods

//1. Create an array of 5 fruits. Add 3 fruits at the end using push() and print the array.
let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

fruits.push("Pineapple", "Papaya", "Kiwi");

console.log(fruits);    //["Apple", "Banana", "Mango", "Orange", "Grapes", "Pineapple", "Papaya", "Kiwi"]


//2. Create an array of 6 numbers. Remove the last element using pop() and print the result.
let numbers = [10, 20, 30, 40, 50, 60];

numbers.pop();

console.log(numbers);   //[10, 20, 30, 40, 50]


//3. Create an array of 5 names. Remove the first element using shift() and print the array.
let names = ["Priya", "Rahul", "Sneha", "Arjun", "Kiran"];

names.shift();

console.log(names);  //["Rahul", "Sneha", "Arjun", "Kiran"]


//4. Create an array of 4 numbers. Add two numbers at the beginning using unshift().
let numbers1 = [30, 40, 50, 60];

numbers1.unshift(10, 20);

console.log(numbers1);     //[10, 20, 30, 40, 50, 60]


//5. Given let arr = [10, 20, 30, 40, 50], remove 2 elements starting from index 1 using splice().
let arr = [10, 20, 30, 40, 50];

arr.splice(1, 2);

console.log(arr);    //[10, 40, 50]


//6. Given let arr = [1, 2, 3, 4, 5], replace the value 3 with 100 using splice().
let arr1 = [1, 2, 3, 4, 5];

arr.splice(2, 1, 100);

console.log(arr1); //[1, 2, 100, 4, 5]


//7. Create an array of 5 numbers and use fill() to replace the elements from index 2 to index 4 with "hello".
let numbers2 = [10, 20, 30, 40, 50];

numbers2.fill("hello", 2, 5);

console.log(numbers2);       //[10, 20, "hello", "hello", "hello"]







//Array Merge and Search Methods

//8. Create two arrays of numbers and combine them using concat().
let arrr1 = [10, 20, 30];
let arrr2 = [40, 50, 60];

let result = arrr1.concat(arrr2);

console.log(result);    //[10, 20, 30, 40, 50, 60]


//9. Given let arr = [10, 20, 30, 40, 50, 60], extract elements from index 1 to index 4 using slice().
let arrr = [10, 20, 30, 40, 50, 60];

let result1 = arrr.slice(1, 5);

console.log(result1);     //[20, 30, 40, 50]


//10. Create a nested array and convert it into a single-level array using flat(Infinity).
let arr2 = [1, [2, 3], [4, [5, 6]], 7];

let result2 = arr2.flat(Infinity);

console.log(result2);         //[1, 2, 3, 4, 5, 6, 7]


//11. Given let arr = [10, 20, 30, 40, 50], check whether the value 30 exists using includes().
let arr3 = [10, 20, 30, 40, 50];

console.log(arr3.includes(30));      //true


//12. Given let arr = [5, 10, 15, 20, 25], find the index of 20 using indexOf().
let arr4 = [5, 10, 15, 20, 25];

console.log(arr4.indexOf(20));     //3


//13. Given let arr = [1, 2, 3, 2, 1, 2], find the last index of 2 using lastIndexOf().
let arr5 = [1, 2, 3, 2, 1, 2];

console.log(arr5.lastIndexOf(2));  //5


//14. Create an array of numbers and arrange its elements using sort().
let numbers3 = [40, 10, 50, 20, 30];

numbers3.sort((a, b) => a - b);

console.log(numbers3);   

//15. Create an array of 7 numbers and reverse the order using reverse().
let numbers4 = [10, 20, 30, 40, 50, 60, 70];

numbers4.reverse();

console.log(numbers4);      //[70, 60, 50, 40, 30, 20, 10]








// Spread and Rest Operators

// 16. Create two arrays containing 4 numbers each. Merge them into one array using the spread operator.
let ar1 = [10, 20, 30, 40];
let ar2 = [50, 60, 70, 80];

let res = [...ar1, ...ar2];

console.log(res);    //[10, 20, 30, 40, 50, 60, 70, 80]

//17. Create two objects: one containing student details and another containing job details. Merge both objects using the spread operator.
let student = {
    name: "Mahi",
    age: 22,
    qualification: "B.E."
};

let job = {
    role: "Frontend Developer",
    company: "ABC Technologies",
    salary: 300000
};

let details = { ...student, ...job };

                                // console.log(details);     
                                    // name: "Mahi",
                                    // age: 22,
                                    // qualification: "B.E.",
                                    // role: "Frontend Developer",
                                    // company: "ABC Technologies",
                                    // salary: 300000
                                // }

//18. Create a function that accepts two parameters and uses the rest operator to collect all remaining arguments into an array.
function restop(a, b, ...c) {
    console.log("First value:", a);
    console.log("Second value:", b);
    console.log("Remaining values:", c);
}

restop(10, 20, 30, 40, 50);           //First value: 10
                                      // Second value: 20
                                      // Remaining values: [30, 40, 50]

// 19. Write a function using function one(a, b, ...c) that prints the sum of a, b, c[0], and c[1].
function one(a, b, ...c) {
    let sum = a + b + c[0] + c[1];

    console.log("Sum:", sum);
}

one(10, 20, 30, 40);     //Sum: 100

//20. Create two arrays and use the spread operator to copy all elements from the first array into a new array.
let ar3 = [10, 20, 30, 40, 50];
let ar4 = [...arr1];

console.log("Original array:", ar3);     //Original array: [10, 20, 30, 40, 50]
console.log("Copied array:", ar4);       //Copied array: [10, 20, 30, 40, 50]








//Array Destructuring

// 21. Given let arr = [10, 20, 30, 40], extract all four values into separate variables using array destructuring.
let array = [10, 20, 30, 40];

let [a, b, c, d] = array;

console.log(a);         //10
console.log(b);        //20
console.log(c);        //30
console.log(d);        //40

//22. Given let nested = [1, 2, [3, 4, [5, 6]]], extract the values 1, 2, 3, 4, 5, and 6 using nested destructuring.
let nested = [1, 2, [3, 4, [5, 6]]];

let [a1, b1, [c1, d1, [e1, f1]]] = nested;

console.log(a1);      //1               
console.log(b1);      //2
console.log(c1);      //3
console.log(d1);      //4
console.log(e1);      //5
console.log(f1);      //6

// 23. Create an array containing a student's name, age, and CGPA. Extract these values using destructuring and print them.
let student1 = ["Mahi", 22, 9.2];

let [name, age, cgpa] = student1;

console.log("Name:", name);           //Name: Mahi
console.log("Age:", age);             //Age: 22
console.log("CGPA:", cgpa);           //CGPA: 9.2





//Object Destructuring

// 24. Create an object containing name, role, and location. Extract these properties using object destructuring.
let employee = {
    name1: "Mahi",
    role: "Frontend Developer",
    location1: "Bengaluru"
};

let { name1, role, location1 } = employee;

console.log(name1);
console.log(role);
console.log(location1);       //Mahi
                            // Frontend Developer
                            // Bengaluru

// 25. Create an object containing a student's name and a nested address object with city and state. Extract the city and state using nested object destructuring.
let student2 = {
    name: "Rahul",
    address: {
        city: "Mysuru",
        state: "Karnataka"
    }
};

let {
    address: { city, state }
} = student2;

console.log("City:", city);              //City: Mysuru
console.log("State:", state);            //State: Karnataka

//26. Given an object with name, role, and location: { mainLocation, currentLocation }, print all four values using destructuring.
let employee1 = {
    name2: "Mahi",
    role1: "Frontend Developer",
    loc: {
        mainLocation: "Bengaluru",
        currentLocation: "Hyderabad"
    }
};

let {
    name2,
    role1,
    loc: { mainLocation, currentLocation }
} = employee1;

console.log("Name:", name2);                        //Name: Mahi
console.log("Role:", role);                         //Role: Frontend Developer 
console.log("Main Location:", mainLocation);        //Main Location: Bengaluru
console.log("Current Location:", currentLocation);  //Current Location: Hyderbad






// Mixed Practical Challenges


//27. Create an array of 10 numbers. Remove the first and last elements, add two new numbers at the beginning, and print the final array.
let array1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

array1.shift();
array1.pop();

array1.unshift(5, 15);

console.log(array1);        //[5, 15, 20, 30, 40, 50, 60, 70, 80, 90]

//28. Create an array containing duplicate numbers. Use includes(), indexOf(), and lastIndexOf() to check and print information about one selected number.
let array2 = [10, 20, 30, 20, 40, 20, 50];

let num = 20;

console.log("Exists:", arr.includes(num));              //Exists: true
console.log("First index:", arr.indexOf(num));          //First index: 1
console.log("Last index:", arr.lastIndexOf(num));       //Last index: 5


//29. Create two objects containing employee information. Merge them using the spread operator, then destructure and print the employee's name and role.
let emp1 = {
    name3: "Mahi",
    age: 22
};

let emp2 = {
    role3: "Frontend Developer",
    salary: 30000
};

let emp = { ...emp1, ...emp2 };

let { name3, role3 } = emp;

console.log("Employee Name:", name3);          //Employee Name: Mahi  
console.log("Employee Role:", role3);          //Employee Role: Frontend Developer

//30. Create a nested array containing numbers. Flatten it using flat(Infinity), reverse the resulting array, and print the final result.
let array5 = [1, [2, 3], [4, [5, 6]], 7];

let result5 = array5.flat(Infinity);

result5.reverse();

console.log(result5);                      //[7, 6, 5, 4, 3, 2, 1]