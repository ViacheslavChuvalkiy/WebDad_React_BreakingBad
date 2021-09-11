import axios from 'axios';

export const receiveTreeData = data => ({
  type: 'RECEIVE_TREE_DATA',  data,
})

export const treeRequestFailed = (err) => ({
  type: 'TREE_DATA_REQUEST_FAILED', err,
})


export function getCardList() {
  return dispatch => {
    axios.get('https://www.breakingbadapi.com/api/characters?limit=10&offset=10')
    .then(res => dispatch(receiveTreeData(res.data)))
    .catch(err => dispatch(treeRequestFailed(err)))
    // .then(response => {
    //   return {
    //     type : "GET_CARD_LIST",
    //     cardList: response.data
    //   };
  };
};