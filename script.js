// Shopping Cart Logic
let cart = [] ;
let cartTotal = 0 ;

document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", function() {
        let itemName = this.getAttribute("data-name");
        let itemPrice = parseFloat(this.getAttribute("data-price"));

        cart.push({ name: itemName, price: itemPrice });
        updateCart();
    });
});

function updateCart() {
    let cartList = document.getElementById("cart-items");
    let totalDisplay = document.getElementById("cart-total");
    
    cartList.innerHTML = "";
    cartTotal = 0;

    cart.forEach(item => {
        let li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartList.appendChild(li);
        cartTotal += item.price;
    });

    totalDisplay.textContent = cartTotal.toFixed(2);
}

// Open and Close Cart
document.getElementById("checkout-btn").addEventListener("click", checkout);
document.getElementById("close-cart").addEventListener("click", () => {
    document.getElementById("cart").style.display = "none";
});

function checkout() {
    alert("Redirecting to payment... (Implement Stripe/PayPal here)");
}
