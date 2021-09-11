
function cardListReducer(state = [],action) {
  console.log(action.data)

  switch (action.type) {
    case 'RECEIVE_TREE_DATA':
      return action.cardList;
    default:
      return state
  }
}

export default cardListReducer;
