//------ARRAY HIGHER ORDER METHODS-------------

let shoppingItems = [
    { name: "Milk", price: 30, purchased: true },
    { name: "Bread", price: 40, purchased: false },
    { name: "Rice", price: 100, purchased: true },
    { name: "Eggs", price: 60, purchased: false }
];
console.log(shoppingItems);


// getElementById() - Selects an HTML element using its ID.

let shoppingList = document.getElementById("shop-list");
let pendingList = document.getElementById("pending-list");




// forEach() - Executes a function for each item in the array.

shoppingItems.forEach((item) => {
    console.log("Name:", item.name);
    console.log("Price:", item.price);
    console.log("Purchased:", item.purchased);
});



// map() - Creates a new array by transforming each item.

let productDetails = shoppingItems.map((item) => {
    return `<p>${item.name} - ₹${item.price}</p>`;
});
console.log(productDetails)


shoppingList.innerHTML = productDetails.join("");    // join("") - Combines array elements into a single string.
console.log(shoppingList)



// filter() - Creates a new array containing items that match a condition.

let purchasedItems = shoppingItems.filter((item)=>{
    return item.purchased === true
}) 
console.log(purchasedItems);    //returns new array that its purchased value is true

let purchasedDetails = purchasedItems.map((item) => {
    return `<p>${item.name} - ₹${item.price}</p>`;
});

shoppingList.innerHTML = purchasedDetails.join("");

let unpurchasedItems = shoppingItems.filter((item)=>{
    return item.purchased === false
}) 
console.log(unpurchasedItems);    //returns new array that its purchased value is false

let pendingDetails = unpurchasedItems.map((item) => {
    return `<p>${item.name} - ₹${item.price}</p>`;
});

pendingList.innerHTML = pendingDetails.join("");



// reduce() - Combines array values into a single result, such as a total.


let purchasedtotal=document.getElementById("purchased-total")

let purchased = shoppingItems.filter((item)=>{
    return item.purchased === true;
})
.reduce((total,item)=>{
    return total + item.price;
},0)
purchasedtotal.innerText=`Total Price: ₹${purchased}`


let unparchasedtotal = document.getElementById("unpurchased-total");

let unpurchased = shoppingItems.filter((item)=>{
    return item.purchased === false;
})
.reduce((total,item)=>{
    return total + item.price;
},0)
unparchasedtotal.innerText = `Total Price: ₹${unpurchased}`;



// some() - Returns true if at least one item matches the condition.

let hasExpensiveItem = shoppingItems.some((item) => {
    return item.price > 100;
});

console.log(hasExpensiveItem);



// every() - Returns true only if all items match the condition.

let allPurchased = shoppingItems.every((item) => {
    return item.purchased === true;
});

console.log(allPurchased);




//--------------------Date methods---------------------

 

let today = new Date();     // new Date() - Creates an object containing the current date and time.

let day = today.getDate();      
let month = today.getMonth() + 1;
let year = today.getFullYear();

let dateElement = document.getElementById("today-date");


dateElement.innerText = today.toDateString();       //// toDateString() - Converts the date into a readable string.
 

