
function cardListReducer(state = [],action) {

  switch (action.type) {
    case 'RECEIVE_TREE_DATA':
      return action.cardList;
    default:
      return state
  }
}

export default cardListReducer;
