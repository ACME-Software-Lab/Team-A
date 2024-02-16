// Function to add product card
function addProduct() {
  var container = document.getElementById("product-container");

  var productCard = document.createElement("div");
  productCard.classList.add("product-card");

  var productImg = document.createElement("div");
  productImg.classList.add("product-img");
  productImg.innerHTML = '<img src="img/mart.png" alt="Product Image">';

  var productInfo = document.createElement("div");
  productInfo.classList.add("product-info");
  productInfo.innerHTML = `
        <h2 class="product-title">New Product</h2>
        <p class="product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p class="product-price">$19.99</p>
        <div class="product-actions">
            <button onclick="viewProduct(this)">View</button>
            <button onclick="deleteProduct(this)">Delete</button>
        </div>
    `;

  productCard.appendChild(productImg);
  productCard.appendChild(productInfo);
  container.appendChild(productCard);
}

function deleteProduct(button) {
  var productCard = button.closest(".product-card");
  productCard.style.display = "none";
}

// Function to view product details (could be expanded)
function viewProduct(button) {
  alert("View Product Details");
}
