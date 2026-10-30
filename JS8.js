//------------------------Practice----------------------------------

// let api= document.querySelector(".api")
// let productContainer = document.querySelector("#products")

// api.innerHTML="Loading...";

// fetch("https://fakestoreapi.com/products")

//     .then((response) => response.json())

//     .then((products) => {

//         // 18. Display success message
//         api.innerHTML = "API data loaded successfully";

//         // 1. Display only product title inside h1
//         products.forEach((product) => {
//             console.log(`<h1>${product.title}</h1>`);
//         });

//         // 2. Product ID and title inside h2
//         products.forEach((product) => {
//             console.log(`<h2>${product.id} - ${product.title}</h2>`);
//         });

//         // 3. First 30 characters of each title
//         products.forEach((product) => {
//             console.log(product.title.slice(0, 30));
//         });

//         // 4. First 100 characters of description
//         products.forEach((product) => {
//             console.log(product.description.slice(0, 100));
//         });

//         // 5. Product image inside div
//         products.forEach((product) => {
//             console.log(`<div><img src="${product.image}"></div>`);
//         });

//         // 6. Title, description and image inside one div
//         products.forEach((product) => {
//             console.log(`
//                 <div>
//                     <h2>${product.title}</h2>
//                     <p>${product.description}</p>
//                     <img src="${product.image}">
//                 </div>
//             `);
//         });

//         // 7. Product price inside p
//         products.forEach((product) => {
//             console.log(`<p>${product.price}</p>`);
//         });

//         // 8. Product category inside h3
//         products.forEach((product) => {
//             console.log(`<h3>${product.category}</h3>`);
//         });

//         // 9. Product title in uppercase
//         products.forEach((product) => {
//             console.log(product.title.toUpperCase());
//         });

//         // 10. Title and total character count
//         products.forEach((product) => {
//             console.log(product.title, product.title.length);
//         });

//         // 11. First 5 products
//         products.forEach((product, index) => {
//             if (index < 5) {
//                 console.log(product);
//             }
//         });

//         // 12. Product ID, title and price
//         products.forEach((product) => {
//             console.log(product.id, product.title, product.price);
//         });

//         // 13. Image width 200px
//         products.forEach((product) => {
//             console.log(`
//                 <img src="${product.image}" width="200px">
//             `);
//         });

//         // 14. Separate div with class card
//         products.forEach((product) => {
//             console.log(`<div class="card">${product.title}</div>`);
//         });

//         // 15. Title and description limited to 50 characters
//         products.forEach((product) => {
//             console.log(product.title);
//             console.log(product.description.slice(0, 50));
//         });

//         // 16. Display all titles in console and webpage
//         products.forEach((product) => {
//             console.log(product.title);

//             let title = document.createElement("h2");
//             title.innerHTML = product.title;

//             productContainer.appendChild(title);
//         });

//         // 17. Title and category inside same div
//         products.forEach((product) => {
//             console.log(`
//                 <div>
//                     <h2>${product.title}</h2>
//                     <h3>${product.category}</h3>
//                 </div>
//             `);
//         });

//     })

//     .catch((error) => {
//         api.innerHTML = error;
//         console.log(error);
//     })

//     .finally(() => {
//         api.innerHTML = "API request completed";
//         console.log("API request completed");
//     });



//------------------------MINI PROJECT TASK-------------------------

let api= document.querySelector(".api")
let productContainer = document.querySelector("#products")
let completion = document.querySelector(".completion");

api.innerHTML="Loading..."

fetch("https://fakestoreapi.com/products")
.then((response)=>{
    return response.json()
})
.then((products)=>{

    api.innerHTML="Products Loaded Successfully!"

    products.forEach((product)=>{

        let card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `  <h2>Product ID: ${product.id}</h2>
                            <h3>${product.title.slice(0, 50)}</h3>
                            <p class="price">Price: $${product.price}</p>
                            <p>${product.description.slice(0,100)}</p>
                            <img src="${product.image}"  width="150">`

        productContainer.appendChild(card);
                          
        
    })
})
.catch((error)=>{
    api.innerHTML = "Error: " + error;
    api.style.color = "red";

    console.log(error)
})
.finally(() => {
        completion.innerHTML = "API request completed";
        completion.style.color="green"

});
