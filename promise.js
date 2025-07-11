function isUserLoggedIn() {
  return true;
}

function getUserData() {
  return new Promise((resolve, reject) => {
    if (isUserLoggedIn()) {
      resolve({ id: 1, name: 'Alice', role: 'admin' });
    } else {
      reject('User not logged in!');
    }
  });
}
function getUserCart(user) {
  return new Promise((resolve) => {
    resolve({ cartId: 'CART123', items: ['mobile', 'laptop'] });
  });
}

function getDeliveryOptions(cart) {
  return new Promise((resolve) => {
    resolve(['Standard Delivery', 'Express Delivery']);
  });
}

getUserData()
  .then((user) => {
    return getUserCart(user);
  })
  .then((cart) => {
    return this.getDeliveryOptions(cart);
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error('Error:', err);
  });
