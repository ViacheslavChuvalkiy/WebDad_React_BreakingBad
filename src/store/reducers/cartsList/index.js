const initialState = [];

function cartsList(state = initialState, actions) {
  switch (actions.type) {
    case 'GET_CARTS':
      return {
        CartList: actions.payload
      };
    default :
      return state;
  }
}
export default cartsList;
