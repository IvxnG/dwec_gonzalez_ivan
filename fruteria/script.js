let productsSection = document.getElementById("products-section");
let currentPage = 0;
let itemsPerPage = 6;
let cart = [];

// Mostar los productos
function showProducts() {
    products
        .filter((_, index) => Math.trunc(index / itemsPerPage) == currentPage)
        .forEach(({ id, product, price, image }) => {
            let precio = price.toString().slice(0, 1) + "." + price.toString().slice(1, 3);
            productsSection.innerHTML += `
                    <div class="product">
                        <center><img class="product-foto" src="${image}"></img></center>
                        <div class="product-data">
                            <div class="fruit-name">${product}</div>
                            <div class="price">${precio} €/kg</div>
                            <div class="btn btn-add-product" data-id="${id}"> Añadir </div>
                        </div>
                    </div>`;
        })
    let btns = document.querySelectorAll(".btn-add-product")
    btns.forEach(btn => {
        btn.addEventListener("click", addTocart)
    })
}

//Carrito
function addTocart(e) {
    let productId = e.target.dataset.id;
    products.forEach(item => {
        if (item.id == productId) {
            //let itemCart = item;
            if (item.cantidad) {
                item.cantidad++;
            } else {
                item.cantidad = 1;
                cart.push(item);
            }
        }
    })
    renderCart();
}

function renderCart() {
    let cartProducts = document.getElementById("cartProducts");
    let totalPrice = 0;
    cartProducts.innerHTML = ``;
    cart.forEach(item => {
        totalPrice += (Number(item.price.toString().slice(0, 1) + "." + item.price.toString().slice(1, 3)) * item.cantidad);
        let div = document.createElement("div");
        div.innerHTML = `
                        <div class="cartItem">
                            <div class="nombre item-data">${item.product}</div>
                            <div class="cantidad item-data item-center">${item.cantidad}</div>
                            <div class="precio item-data item-center">${Number(item.price.toString().slice(0, 1) + "." + item.price.toString().slice(1, 3))+"€/Kg"}</div>
                        </div>
        `;
        cartProducts.append(div);
    })

    cartProducts.innerHTML += `<p class="totalPrice">${"Total :  "+ totalPrice.toFixed(2) + "€"}</p>`;
}

showProducts();

//Paginacion
let numPag = document.getElementById("numPag")

let next = document.getElementById("next")
next.addEventListener("click", () => {
    if (currentPage <= 1) {
        currentPage++;
        productsSection.innerHTML = ``;
        showProducts();
        numPag.textContent = `Pagina ${currentPage + 1} de 3`;
    }
});

let prev = document.getElementById("prev")
prev.addEventListener("click", () => {
    if (currentPage >= 1) {
        currentPage--;
        productsSection.innerHTML = ``;
        showProducts();
        numPag.textContent = `Pagina ${currentPage + 1} de 3`;
    }
});