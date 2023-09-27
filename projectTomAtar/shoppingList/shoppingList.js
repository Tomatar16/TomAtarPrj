const removeFromCart = (value) => {
  let cartList = JSON.parse(localStorage.getItem("cart_list")) || [];
  cartList.splice(value, 1);
  localStorage.setItem("cart_list", JSON.stringify(cartList));
  showCart();
};

const showCart = () => {
  let cartList = JSON.parse(localStorage.getItem("cart_list")) || [];
  let html = "";
  for (let i = 0; i < cartList.length; i++) {
    html += `<div>${cartList[i]} <button value="${i}">remove</button> </div>`;
  }
  document.getElementById("cart").innerHTML = html;
  let btnsRemove = document.querySelectorAll("#cart>div>button");
  for (let j = 0; j < btnsRemove.length; j++) {
    btnsRemove[j].addEventListener("click", () => {
      removeFromCart(btnsRemove[j].value);
    });
  }
};

const addToCart = (value) => {
  let cart = JSON.parse(localStorage.getItem("cart_list")) || [];
  cart.push(value);
  localStorage.setItem("cart_list", JSON.stringify(cart));
  showCart();
};

window.addEventListener("load", () => {
  showCart();
  let btns = document.querySelectorAll("#list>div>button");
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", () => {
      addToCart(btns[i].value);
    });
  }
});
