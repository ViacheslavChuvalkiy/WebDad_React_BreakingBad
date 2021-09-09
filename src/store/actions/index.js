
const cartsLoaded = (cartsList) => {
  return {
    type : 'GET_CARTS',
    payload: cartsList
  };
};

export {
  cartsLoaded
};