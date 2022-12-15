let products = [
    {
        name: "Malibu Dreams Dress",
        price: "$199.99",
        image: "https://cdn.shopify.com/s/files/1/0285/9001/4596/products/1004886_MALIBU_DREAMS_DRESS_PRINT_STAS_1.jpg?v=1669068628&width=1440"
    },
    {
        name: "Swan Lake Dress",
        price: "$209.99",
        image: "https://cdn.shopify.com/s/files/1/0285/9001/4596/products/S36-1004368_SWAN_LAKE_DRESS_PRINT-221053-Sheike-1155.jpg?v=1670974892&width=1440"
    },
    {
        name: "Parisian Playsuit",
        price: "$189.99",
        image: "https://cdn.shopify.com/s/files/1/0285/9001/4596/products/1004926_PARISIAN_PLAYSUIT_BLACK_STAS_1.jpg?v=1669609264&width=1440"
    },
]
      // Array to hold shopping cart items
    let shoppingCart = [];

      // Function to add a product to the shopping cart
      function addToCart(product) {
        shoppingCart.push(JSON.parse(product));
        saveShoppingCart();
        displayShoppingCart();
      }

      // Function to display the shopping cart
      function displayShoppingCart() {
        // Clear the shopping cart display
        document.getElementById("shopping-cart").innerHTML = "";

        // Calculate the total price of the shopping cart
        let totalPrice = 0;
        for (const item of shoppingCart) {
          totalPrice += item.price;
        }

        // Loop over the shopping cart items and display them
        /*for (const item of shoppingCart) {
          const div = document.createElement("div");
          div.innerHTML = `
            <img src="${item.image}" alt="${item.name}" />
            <h3>${item.name}</h3>
            <p>${item.price}</p>
          `;
          document.getElementById("shopping-cart").appendChild(div);
        } */

        // Display the total price of the shopping cart
        const totalPriceDiv = document.createElement("div");
        totalPriceDiv.innerHTML = `<p>Total: ${totalPrice}</p>`;
        document.getElementById("shopping-cart").appendChild(totalPriceDiv);
      }

      // Function to load the shopping cart from local storage
      function loadShoppingCart() {
        // Retrieve the shopping cart from local storage
        const savedShoppingCart = JSON.parse(localStorage.getItem("shoppingCart"));
        if (savedShoppingCart) {
          shoppingCart = savedShoppingCart;
        }
      }

      // Function to save the shopping cart to local storage
      function saveShoppingCart() {
        // Save the shopping cart to local storage
        localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
      }

      function displayProducts() {
        // Loop over the products and display them
        for (const product of products) {
          const div = document.createElement("div");
          div.innerHTML = `
                <img src="${product.image}" alt="${product.name}" style="height: 300px"/>
                <h3>${product.name}</h3>
                <p>${product.price}</p>
                <button onclick="addToCart('${JSON.stringify(product)}')">Add to Cart</button>
          `;
          document.getElementById("products").appendChild(div);
        }
      }

window.addEventListener("load", function() {
    // Load the shopping cart from local storage
    loadShoppingCart();

    // Display the shopping cart
    displayShoppingCart();

    // Display the products
    displayProducts();
  });


