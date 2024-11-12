document.addEventListener("DOMContentLoaded", () => {
    const productList = document.getElementById("product-list");

    fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(products => {
            products.forEach(product => {
                const productCard = document.createElement("div");
                productCard.className = "product-card";

                productCard.innerHTML = `
                    <img src="${product.image}" alt="${product.title}">
                    <h3>${product.title}</h3>
                    <p>${product.description.substring(0, 100)}...</p>
                    <p class="price">$${product.price}</p>
                `;

                productList.appendChild(productCard);
            });
        })
        .catch(error => console.error("Error fetching products:", error));
});
