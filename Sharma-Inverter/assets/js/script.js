/*==========================================================
        PRODUCTS SECTION
==========================================================*/

const productsContainer = document.getElementById("productsContainer");

const filterButtons = document.querySelectorAll(".filter-btn");

/* ==========================
        RENDER
========================== */

function renderProducts(category = "all") {
  if (!productsContainer) return;

  let filteredProducts;

  if (category === "all") {
    filteredProducts = products;
  } else {
    filteredProducts = products.filter((item) => item.category === category);
  }

  if (filteredProducts.length === 0) {
    productsContainer.innerHTML = `

        <div class="no-product">

            <h3>No Products Available</h3>

        </div>

        `;

    return;
  }

  productsContainer.innerHTML = filteredProducts
    .map(
      (product) => `

        <div class="product-card"

            data-aos="zoom-in">

            <div class="product-image">

                <img

                    src="${product.image}"

                    alt="${product.name}"

                    loading="lazy">

            </div>

            <div class="product-content">

                <h3>${product.name}</h3>

                <div class="product-brand">

                    ${product.brand}

                </div>

                <button

                    class="offer-btn"

                    onclick="sendProduct('${product.name}')">

                    Offer Price

                </button>

            </div>

        </div>

    `,
    )
    .join("");

  AOS.refresh();
}

/* ==========================
        FILTER
========================== */

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));

    button.classList.add("active");

    renderProducts(button.dataset.filter);
  });
});

/* ==========================
        WHATSAPP
========================== */

function sendProduct(product) {
  const message = `Hello Sharma Inverters,

I am interested in

       ${product} 

Please share today's best offer price.

Thank You.`;

  window.open(
    `https://wa.me/918595973195?text=${encodeURIComponent(message)}`,

    "_blank",
  );
}

/* ==========================
        INIT
========================== */

renderProducts();

document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    duration: 800,
    once: true,
    easing: "ease-in-out",
    offset: 80,
  });
});
