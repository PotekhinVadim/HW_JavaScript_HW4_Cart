const increase = document.getElementsByClassName('product__quantity-control product__quantity-control_inc')
const decrease = document.getElementsByClassName('product__quantity-control product__quantity-control_dec')
const quantity = document.getElementsByClassName('product__quantity-value')
const add = document.getElementsByClassName('product__add')
const products = document.getElementsByClassName('product')
const images = document.getElementsByClassName('product__image')
const cart = document.querySelector('.cart__products')
let arrayId = []


for (let i = 0; i < increase.length; i++) {
    increase[i].onclick = () => {
        quantity[i].textContent = Number(quantity[i].textContent) + 1
    };

    decrease[i].onclick = () => {
        if (quantity[i].textContent > 1){
            quantity[i].textContent = Number(quantity[i].textContent) - 1
        };
    };

    add[i].onclick = () => {
        const cartCount = document.querySelectorAll('.cart__product-count')
        
        if (arrayId.includes(products[i].getAttribute('data-id') ) ) {
            cartCount[i].textContent = Number(cartCount[i].textContent) + Number(quantity[i].textContent)
        } else {
            cart.innerHTML +=  
            `<div class="cart__product" data-id="${products[i].getAttribute('data-id')}">
                <img class="cart__product-image" src="${images[i].getAttribute('src')}">
                <div class="cart__product-count">${quantity[i].textContent}</div>
            </div>`
        }
        arrayId.push(products[i].getAttribute('data-id'))
    }
}