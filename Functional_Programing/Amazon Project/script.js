const user = {
  name: "Kim",
  active: true,
  cart: [],
  purchases: []
};
const newItem = { name: "laptop", price: 200 };
let amazonHistory = [];

const compose = (f, g) => (...args) => f(g(...args));

purchaseItem(emptyCart, buyItem, applyTaxToItems, addItemToCart)(user, newItem);

function purchaseItem(...fns) {
  return fns.reduce(compose);
}

function addItemToCart(user, item) {
  amazonHistory.push(user);

  const updateCart = user.cart.concat(item);
  return Object.assign({}, user, { cart: updateCart }); // returns a new object to maintain fucntion pure
}

function applyTaxToItems(user) {
  amazonHistory.push(user);
  const { cart } = user; // {cart} is the same as user.cart
  const taxRate = 1.3;
  const updatedCar = cart.map(item => {
    return {
      name: item.name,
      price: item.price * taxRate
    };
  });
  return Object.assign({}, user, { cart: updatedCar });
}

function buyItem(user) {
  amazonHistory.push(user);
  return Object.assign({}, user, { purchases: user.cart });
}

function emptyCart(user) {
  amazonHistory.push(user);
  return Object.assign({}, user, { cart: [] });
}
