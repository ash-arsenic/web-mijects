const data = [
  {
    id: 1,
    name: "High-Back Bench",
    price: 9.9,
    image: "./images/product-1.jpeg",
    company: "Ikea",
    count: 0,
  },

  {
    id: 2,
    name: "Utopia Safe",
    price: 39.95,
    image: "./images/product-2.jpeg",
    company: "Liddy",
    count: 0,
  },

  {
    id: 3,
    name: "Entertainment Center",
    price: 29.98,
    image: "./images/product-3.jpeg",
    company: "Liddy",
    count: 0,
  },

  {
    id: 4,
    name: "Albany Table",
    price: 79.99,
    image: "./images/product-4.jpeg",
    company: "Ikea",
    count: 0,
  },

  {
    id: 5,
    name: "Accent Chair",
    price: 25.99,
    image: "./images/product-5.jpeg",
    company: "Ikea",
    count: 0,
  },

  {
    id: 6,
    name: "Wooden Table",
    price: 45.99,
    image: "./images/product-6.jpeg",
    company: "Liddy",
    count: 0,
  },

  {
    id: 7,
    name: "Dining Table",
    price: 6.99,
    image: "./images/product-7.jpeg",
    company: "Marcos",
    count: 0,
  },

  {
    id: 8,
    name: "Sofa Set",
    price: 69.99,
    image: "./images/product-8.jpeg",
    company: "Caressa",
    count: 0,
  },

  {
    id: 9,
    name: "Modern Bookshelf",
    price: 8.99,
    image: "./images/product-4.jpeg",
    company: "Ikea",
    count: 0,
  },

  {
    id: 10,
    name: "High-Back Bench",
    price: 9.9,
    image: "./images/product-1.jpeg",
    company: "Marcos",
    count: 0,
  },

  {
    id: 11,
    name: "Utopia Safe",
    price: 39.95,
    image: "./images/product-2.jpeg",
    company: "Caressa",
    count: 0,
  },

  {
    id: 12,
    name: "Entertainment Center",
    price: 29.98,
    image: "./images/product-3.jpeg",
    company: "Marcos",
    count: 0,
  },
];

// REFENCES
const searchItem = document.querySelectorAll(".search-item");
const addToCart = document.querySelectorAll(".add-to-cart");

const cartCount = document.querySelector(".cart-size");
const cartItems = document.querySelector(".cart-items");
// Variables
let selectedItem = 0;
// In the beginning
window.addEventListener("DOMContentLoaded", function () {
  for (let i = 0; i < data.length; i++) {
    const element = makeElement(data[i]);
    productsList.appendChild(element);
  }
  sliderValue.innerText = slider.value;
  cartCount.innerText = selectedItem;
});

// Event Handlers
searchItem.forEach(function (item) {
  item.addEventListener("click", function () {
    console.log("Search Item");
    id = "4";
    window.location.href = "single-product.html?id=" + id;
  });
});

addToCart.forEach(function (item) {
  item.addEventListener("click", function () {
    // cartItems.appendChild(makeCartItems(data[0]));
    console.log("Adding");
    selectedItem++;
    cartCount.innerText = selectedItem;
  });
});

// Products
sidebarLinks.forEach(function (item) {
  item.addEventListener("click", function (e) {
    const ele = e.currentTarget.classList;
    removeElements();
    if (ele.contains("all")) {
      for (let i = 0; i < data.length; i++) {
        const element = makeElement(data[i]);
        productsList.appendChild(element);
      }
    } else if (ele.contains("ikea")) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].company === "Ikea") {
          const element = makeElement(data[i]);
          productsList.appendChild(element);
        }
      }
    } else if (ele.contains("marcos")) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].company === "Marcos") {
          const element = makeElement(data[i]);
          productsList.appendChild(element);
        }
      }
    } else if (ele.contains("caressa")) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].company === "Caressa") {
          const element = makeElement(data[i]);
          productsList.appendChild(element);
        }
      }
    } else if (ele.contains("liddy")) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].company === "Liddy") {
          const element = makeElement(data[i]);
          productsList.appendChild(element);
        }
      }
    }
  });
});

slider.oninput = function () {
  const currentValue = this.value;
  sliderValue.innerText = currentValue;
  removeElements();
  for (let i = 0; i < data.length; i++) {
    if (data[i].price <= currentValue) {
      productsList.appendChild(makeElement(data[i]));
    }
  }
};

searchProduct.oninput = function () {
  const currentValue = this.value;
  removeElements();
  for (let i = 0; i < data.length; i++) {
    const str = data[i].name.toLowerCase();
    const comp = currentValue.toLowerCase();
    if (str.includes(comp)) {
      productsList.appendChild(makeElement(data[i]));
    }
  }
};

// Functions
function makeElement(productDetails) {
  const element = document.createElement("section");
  element.classList.add("comfy-item");
  const attr = document.createAttribute("data-id");
  attr.value = productDetails.id;
  element.setAttributeNode(attr);
  element.innerHTML = `
  <div class="col">
                <div class="card">
                  <img
                    src=${productDetails.image}
                    class="card-img-top"
                    alt=""
                  />
                  <div class="show-icon">
                    <div class="circle-icon mx-3 search-item">
                      <button class="buton" style="color: white">
                        <i class="bi bi-search h5"></i>
                      </button>
                    </div>

                    <div class="circle-icon mx-3 add-to-cart">
                      <button class="buton" style="color: white">
                        <i class="bi bi-cart-fill h5"></i>
                      </button>
                    </div>
                  </div>

                  <div class="card-body">
                    <h5 class="product-title">${productDetails.name}</h5>
                    <h5 class="product-price">$${productDetails.price}</h5>
                  </div>
                </div>
              </div>
  `;
  return element;
}

function removeElements() {
  while (productsList.firstChild) {
    productsList.removeChild(productsList.lastChild);
  }
}

function makeCartItems(product) {
  const element = document.createElement("section");
  element.classList.add("cart-product");
  element.innerHTML = `
  <div class="row my-4">
  <div class="col-3 d-flex align-items-center">
    <img
      src=${product.image}
      class="img-fluid cart-item-img"
      alt=""
    />
  </div>
  <div class="col-7">
    <p class="cart-item-detail">
      <span class="cart-item-name">${product.name}</span>
      <br />
      <span class="cart-item-price">$${product.price}</span>
      <br />
      <button class="cart-item-remove">remove</button>
    </p>
  </div>
  <div class="col-2">
    <button class="buton">
      <i class="bi icon-up bi-chevron-up"></i>
    </button>
    <div class="cart-item-count">${product.count}</div>
    <button class="buton">
      <i class="bi icon-up bi-chevron-down"></i>
    </button>
  </div>
</div>

  `;
}
