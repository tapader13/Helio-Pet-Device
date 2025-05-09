const qtyElement = document.getElementById('qty');
const qtyElement1 = document.getElementById('qty-one');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const increaseBtn1 = document.getElementById('increase-one');
const decreaseBtn1 = document.getElementById('decrease-one');
const addToCartBtn = document.getElementById('add-to-cart');
const addToCartBtn1 = document.getElementById('add-to-cart-one');

const newPriceElement = document.getElementById('new-price');
const oldPriceElement = document.getElementById('old-price');
const newPriceElement1 = document.getElementById('new-price-mobile');

const drawer = document.getElementById('cart-drawer');
const closeDrawerBtn = document.getElementById('close-drawer');

const drawerQty = document.getElementById('drawer-qty');
const drawerNewPrice = document.getElementById('drawer-new-price');
const drawerOldPrice = document.getElementById('drawer-old-price');
const drawerIncrease = document.getElementById('drawer-increase');
const drawerDecrease = document.getElementById('drawer-decrease');
const drawerDelete = document.getElementById('drawer-delete');

const baseNewPrice = 249;
const baseOldPrice = 369;

let quantity = parseInt(localStorage.getItem('cartQty')) || 1;

function updateDisplay() {
  qtyElement.textContent = quantity;
  qtyElement1.textContent = quantity;
  newPriceElement.textContent = `$${(baseNewPrice * quantity).toFixed(2)}`;
  oldPriceElement.textContent = `$${(baseOldPrice * quantity).toFixed(2)}`;
  newPriceElement1.textContent = `$${(baseNewPrice * quantity).toFixed(2)}`;

  if (drawerQty && drawerNewPrice && drawerOldPrice) {
    drawerQty.textContent = quantity;
    drawerNewPrice.textContent = `$${(baseNewPrice * quantity).toFixed(2)}`;
    drawerOldPrice.textContent = `$${(baseOldPrice * quantity).toFixed(2)}`;
  }

  localStorage.setItem('cartQty', quantity);
}

updateDisplay();

increaseBtn.addEventListener('click', () => {
  if (quantity < 10) {
    quantity++;
    updateDisplay();
  }
});

decreaseBtn.addEventListener('click', () => {
  if (quantity > 1) {
    quantity--;
    updateDisplay();
  }
});
increaseBtn1.addEventListener('click', () => {
  if (quantity < 10) {
    quantity++;
    updateDisplay();
  }
});

decreaseBtn1.addEventListener('click', () => {
  if (quantity > 1) {
    quantity--;
    updateDisplay();
  }
});
addToCartBtn.addEventListener('click', () => {
  drawer.classList.add('open');
  updateDisplay();
});
addToCartBtn1.addEventListener('click', () => {
  drawer.classList.add('open');
  updateDisplay();
});

closeDrawerBtn.addEventListener('click', () => {
  drawer.classList.remove('open');
});

drawerIncrease.addEventListener('click', () => {
  if (quantity < 10) {
    quantity++;
    updateDisplay();
  }
});

drawerDecrease.addEventListener('click', () => {
  if (quantity > 1) {
    quantity--;
    updateDisplay();
  }
});

drawerDelete.addEventListener('click', () => {
  quantity = 1;
  updateDisplay();
  drawer.classList.remove('open');
});
