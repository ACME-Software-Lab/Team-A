const products = {
  Furniture: [
    {
      name: "Comfortable Sofa",
      description:
        "Add a touch of style and comfort to your living room with this modern sofa.",
      price: "$499.99",
      images: [
        "img/Furniture.jpeg",
        "img/furniture2.jpeg",
        "img/furniture3.jpeg",
      ],
    },
  ],
  Shoes: [
    {
      name: "Running Shoes",
      description:
        "Stay active and comfortable with these high-quality running shoes.",
      price: "$79.99",
      images: ["img/shoe.jpeg", "img/femaleShoe.jpeg", "img/male shoe.jpeg"],
    },
  ],
  Electronics: [
    {
      name: "Smartphone",
      description: "Stay connected with the latest smartphone technology.",
      price: "$699.99",
      images: ["img/phone1.jpeg", "img/phone2.jpeg", "img/phone3.jpeg"],
    },
  ],
  Bags: [
    {
      name: "Travel Backpack",
      description: "Travel with ease and style with this durable backpack.",
      price: "$59.99",
      images: ["img/bag1.jpeg", "img/bag2.jpeg", "img/bag3.jpeg"],
    },
  ],
  // Add more categories
};

// Function to generate product cards
function generateProductCards(category) {
  const container = document.getElementById("product-container");
  container.innerHTML = ""; // Clear previous content

  let filteredProducts = [];

  if (category === "All") {
    // If "All" products selected, concatenate all products
    for (const key in products) {
      filteredProducts = filteredProducts.concat(products[key]);
    }
  } else {
    // Otherwise, get products of the selected category
    filteredProducts = products[category] || [];
  }

  // Check if filteredProducts is an array before iterating over it
  if (Array.isArray(filteredProducts)) {
    // Generate product cards for the filtered products
    filteredProducts.forEach((product) => {
      product.images.forEach((image) => {
        generateProductCard(container, product, image);
      });
    });
  } else {
    // Handle case when filteredProducts is not an array (e.g., undefined)
    console.log("No products found for category:", category);
  }
}

// Function to generate a single product card
function generateProductCard(container, product, image) {
  //  elements for the product card
  const card = document.createElement("div");
  card.classList.add("product-card");

  const name = document.createElement("h3");
  name.textContent = product.name;

  const description = document.createElement("p");
  description.textContent = product.description;

  const price = document.createElement("p");
  price.textContent = product.price;

  // Create and append image element
  const img = document.createElement("img");
  img.src = image;
  img.alt = product.name;

  // Append elements to the product card
  card.appendChild(name);
  card.appendChild(description);
  card.appendChild(price);
  card.appendChild(img);

  // Append the product card to the container
  container.appendChild(card);
}

// Function to add a new product
function addProduct() {
  // Here, you can add the logic to handle adding a new product
  console.log("Add product function called");
}

// Add event listener to the "Add Product" button
document
  .getElementById("add-product-btn")
  .addEventListener("click", addProduct);

// Function to filter products based on category
function filterProducts(category) {
  generateProductCards(category);
}

// Initial call to display all products
generateProductCards("All");
