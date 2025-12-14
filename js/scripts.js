console.log("Is it working?");

console.log(document.getElementById("showbutton"))
const cart = [];
const productli = document.getElementById("productli");
const productco = document.getElementById("productco");

function addcrt() {
    productli.innerHTML = "";
    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price}`;
        productli.appendChild(li);
    });
    let total = 0;
    for (let i = 0; i < cart.length; i=i+1) {
        total += cart[i].price;
    }
    productco.textContent = total;
}

document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", function () {
        const card = this.closest(".product-card");
        const name = card.dataset.name;
        const price = parseFloat(card.dataset.price);
        cart.push({ name, price });
        addcrt();
    });
});
function showbtn() { 
if (cart.length > 0) {
    document.getElementById("checkoutform").classList.remove("hidden");
} else {
    alert("Please add products first!");
}
}

document.getElementById("showbutton").addEventListener("click", showbtn);
let discount=0 
let newtotal=0

const form = document.querySelector("#checkoutform form");
form.addEventListener("submit", function (send) {
    send.preventDefault();
    let total = 0;
    for (let i=0; i < cart.length; i = i +1) {
        total += cart[i].price;
    }
    const taxcost=0.15*total;
    if (cart.length>3) {
        discount = total*0.1;
    } else {
        discount = 0;
    }
    if (cart.length>3) {
        newtotal=total+taxcost-discount
    } else {
        newtotal=total+taxcost
    }
    const ok = confirm("Total product cost: $" + total + "\nTax Cost: $"  + taxcost +"\nDiscount (if more than 3 products): $"  + discount + "\n Final cost: $" + newtotal + "\n\nDo you want to confirm?");
    if (ok) {
        window.location.href ="index.html";
    }
});

